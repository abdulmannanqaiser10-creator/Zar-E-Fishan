# Zar-E-Fishan — Premium Interior Design Website

A luxury interior design website for **Zar-E-Fishan**, built with React (Vite) and Node.js / Express, with MongoDB for contact form submissions.

## Project Structure

```text
web/
├── frontend/   # React + Vite application (port 5173)
└── backend/    # Express API (port 5000)
```

## Prerequisites

- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

## Backend Setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

API endpoints:

- `GET /api/health`
- `POST /api/contact`

Default backend URL: `http://localhost:5000`

### Environment Variables (`backend/.env`)

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/zar-e-fishan
CLIENT_URL=http://localhost:5173
```

## Frontend Setup

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Default frontend URL: `http://localhost:5173`

### Environment Variables (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=923001234567
VITE_CONTACT_EMAIL=hello@zarefishan.com
VITE_CONTACT_PHONE=+92 300 123 4567
```

## Production Build

```bash
# Frontend
cd frontend
npm run build
npm run preview

# Backend
cd backend
npm start
```

## Pages

1. **Home** — Hero, featured projects, services, stats, testimonials, CTA
2. **About** — Story, values, designer, milestones
3. **Services** — Ten interior design service offerings
4. **Projects** — Filterable portfolio with detail modal
5. **Contact** — Validated form connected to the backend API

## Brand Colors

- Dark Olive Green: `#3F4932`
- Golden Beige: `#C5A675`
- Cream White: `#F8F5ED`

## Notes

- The Vite dev server proxies `/api` requests to `http://localhost:5000`.
- Contact form data is stored in MongoDB via Mongoose.
- 3D hero elements gracefully fall back on mobile / reduced-motion devices.
