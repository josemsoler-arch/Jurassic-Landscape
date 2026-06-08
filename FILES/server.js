require('dotenv').config()
const express    = require('express')
const cors       = require('cors')
const contactRouter = require('./routes/contact')
const leadsRouter   = require('./routes/leads')
const authRouter    = require('./routes/auth')

const app  = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/contact', contactRouter)
app.use('/api/leads',   leadsRouter)
app.use('/api/auth',    authRouter)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong on our end.' })
})

app.listen(PORT, () => {
  console.log(`Jurassic Landscape API running on http://localhost:${PORT}`)
})
