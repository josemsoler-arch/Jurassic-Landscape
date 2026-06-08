const express   = require('express')
const { body, validationResult } = require('express-validator')
const nodemailer = require('nodemailer')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// Validation rules
const contactValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('service').optional().trim(),
  body('address').optional().trim(),
  body('message').trim().notEmpty().withMessage('Message is required'),
]

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  // Check validation
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { firstName, lastName, email, phone, service, address, message } = req.body

  try {
    // 1. Save lead to database
    const lead = await prisma.lead.create({
      data: {
        firstName, lastName, email,
        phone:   phone   || null,
        service: service || null,
        address: address || null,
        message,
        status:  'new',
        source:  'website_contact_form',
      }
    })

    // 2. Send email notification to the business
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from:    `"Jurassic Landscape Website" <${process.env.EMAIL_USER}>`,
      to:      process.env.EMAIL_TO,
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table>
          <tr><td><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><strong>Service:</strong></td><td>${service || 'Not specified'}</td></tr>
          <tr><td><strong>Address:</strong></td><td>${address || 'Not provided'}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
        </table>
        <p><a href="${process.env.FRONTEND_URL}/admin">View in Admin Dashboard</a></p>
      `,
    })

    res.status(201).json({
      success: true,
      message: 'Your request has been received. We\'ll be in touch within 24 hours.',
      leadId: lead.id,
    })

  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({ error: 'Failed to submit request. Please call us directly.' })
  }
})

module.exports = router
