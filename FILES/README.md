# Jurassic Landscape Design — Full Stack App

React + Node.js + PostgreSQL website and CRM for Jurassic Landscape Design, Yuma AZ.

---

## Project Structure

```
jurassic-landscape/       ← React frontend (Vite)
  src/
    components/           ← Reusable UI components
      Cursor.jsx
      Navbar.jsx
      Footer.jsx
      Hero.jsx
      Services.jsx
      PortfolioPreview.jsx
      AboutSection.jsx
      Testimonials.jsx
      ContactForm.jsx
    pages/                ← Full pages (routed by React Router)
      Home.jsx
      Portfolio.jsx
      About.jsx
      Contact.jsx
    hooks/
      useScrollReveal.js  ← Intersection observer for animations
    index.css             ← Global styles + Tailwind
    main.jsx              ← Entry point
  index.html
  vite.config.js
  tailwind.config.js

jurassic-backend/         ← Node.js + Express API
  routes/
    contact.js            ← POST /api/contact (form submissions)
    leads.js              ← CRUD /api/leads (admin)
    auth.js               ← POST /api/auth/login
  middleware/
    auth.js               ← JWT protection middleware
  prisma/
    schema.prisma         ← Database models (Lead, Client, Project)
  server.js               ← Express app entry point
  .env.example            ← Environment variable template
```

---

## Getting Started

### 1. Prerequisites
- Node.js 18+
- PostgreSQL (local or cloud like Supabase / Railway)

### 2. Frontend Setup

```bash
cd jurassic-landscape
npm install
npm run dev
# Opens at http://localhost:5173
```

### 3. Backend Setup

```bash
cd jurassic-backend
npm install

# Copy env file and fill in your values
cp .env.example .env
# Edit .env with your DB URL, email credentials, JWT secret

# Set up the database
npx prisma migrate dev --name init
npx prisma generate

# Start the server
npm run dev
# Runs at http://localhost:5000
```

### 4. Environment Variables (`.env`)

| Variable              | Description                              |
|-----------------------|------------------------------------------|
| `DATABASE_URL`        | PostgreSQL connection string             |
| `JWT_SECRET`          | Random secret string for JWT tokens      |
| `EMAIL_HOST`          | SMTP host (e.g. smtp.gmail.com)          |
| `EMAIL_USER`          | Your email address                       |
| `EMAIL_PASS`          | App password (not your regular password) |
| `EMAIL_TO`            | Where quote requests get sent            |
| `ADMIN_EMAIL`         | Admin login email                        |
| `ADMIN_PASSWORD_PLAIN`| Admin password (dev only)                |
| `FRONTEND_URL`        | http://localhost:5173 in dev             |

---

## API Endpoints

| Method | Endpoint          | Description                     | Auth? |
|--------|-------------------|---------------------------------|-------|
| POST   | /api/contact      | Submit contact/quote form       | No    |
| GET    | /api/leads        | List all leads                  | Yes   |
| GET    | /api/leads/:id    | Get single lead                 | Yes   |
| PATCH  | /api/leads/:id    | Update lead status/notes        | Yes   |
| DELETE | /api/leads/:id    | Delete a lead                   | Yes   |
| POST   | /api/auth/login   | Admin login → returns JWT token | No    |
| GET    | /api/health       | Server health check             | No    |

---

## Deployment

**Frontend → Vercel**
```bash
cd jurassic-landscape
npm run build
# Deploy /dist folder to Vercel or run: npx vercel
```

**Backend → Railway or Render**
- Connect your GitHub repo
- Set environment variables in the dashboard
- Railway auto-detects Node.js and runs `npm start`

**Database → Supabase (free tier)**
- Create a project at supabase.com
- Copy the connection string into `DATABASE_URL`
- Run `npx prisma migrate deploy`

---

## Next Steps

- [ ] Add admin dashboard (view/manage leads)
- [ ] Add real project photos to portfolio
- [ ] Set up Google Analytics
- [ ] Add client portal (login, view project status)
- [ ] Integrate payment processing (Stripe)
