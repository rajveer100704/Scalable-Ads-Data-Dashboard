# 🚀 Scalable Ads Data Dashboard

## Tech Stack
- **Backend:** Node.js, Express, Google Ads API, BigQuery (Mock Mode included)
- **Frontend:** React (Vite) + Recharts
- **Cloud:** GCP BigQuery

## Features
- 📊 Interactive dashboard with data aggregation, filtering, and charts
- ⚡ Quota handling, pagination, and caching ready
- 🔗 Works with **real Google Ads + BigQuery** OR **mock data mode** for GitHub demos

---

## Setup Instructions

### 1. Clone repo
```bash
git clone https://github.com/rajveer100704/Scalable-Ads-Data-Dashboard
cd ads-dashboard
```

### 2. Backend (Mock Mode)
```bash
cd backend
npm install
echo "ENABLE_MOCK=true" > .env
npm run start
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open 👉 `http://localhost:5173`

---

## Future Improvements
- Add authentication (OAuth2 for Ads API)
- Advanced filters & breakdowns
- Deployment to GCP (Cloud Run + BigQuery)
