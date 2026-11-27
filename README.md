# Zar-E-Fishan — Premium Interior Design Website

A luxury interior design website for **Zar-E-Fishan**, built with React (Vite) and Node.js / Express, with MongoDB for contact form submissions.

## Live Website

- **Production:** https://zar-e-fishan.vercel.app
- **Vercel project:** https://vercel.com/abdulmannanqaiser10-8796/zar-e-fishan

## Project Structure

```text
web/
├── frontend/   # React + Vite application (port 5173)
├── backend/    # Express API (port 5000 / Vercel serverless)
└── vercel.json # Vercel multi-service deployment config
```

## Prerequisites

- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string (required for production contact form)

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

### Production (Vercel)

Deployed as a multi-service Vercel project (Vite frontend + Express API).

Required / optional production env vars:

| Variable | Required | Notes |
|---|---|---|
| `BLOB_READ_WRITE_TOKEN` | Auto-set | Vercel Blob store for contact submissions |
| `CLIENT_URL` | Recommended | `https://zar-e-fishan.vercel.app` |
| `MONGODB_URI` | Optional | MongoDB Atlas URI; used when set (preferred over Blob) |

To use MongoDB Atlas in production, create a free cluster, allow network access `0.0.0.0/0`, then:

```bash
npx vercel env add MONGODB_URI production
npx vercel deploy --prod
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
