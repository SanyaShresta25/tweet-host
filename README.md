# 🚀 SpacesCoHost - Your AI Co-Host for Twitter Spaces

SpacesCoHost is a modern AI-powered web app built with **React + Vite + Supabase**, designed to transcribe, summarize, and generate content from Twitter Spaces in real time. Easily deployable on **Vercel**.

---

## ✨ Features

* 🎙 Real-time Twitter Spaces transcription
* ✍️ Smart summaries for key takeaways
* 🧠 AI-generated content (tweets, blogs, newsletters)
* 🌗 Light/Dark theme toggle
* 🔐 Auth system using Supabase
* 📦 Modular modal components (Login, Signup, Pricing, Features)

---

## 🧱 Tech Stack

* **Frontend:** React + Vite + TypeScript
* **Icons:** lucide-react
* **Backend:** Supabase (auth + data)
* **Deployment:** Vercel

---

## 📁 Project Structure

```
src/
├── components/
│   ├── LoginModal.tsx
│   ├── SignupModal.tsx
│   ├── FeaturesModal.tsx
│   ├── PricingModal.tsx
│   └── FaqSection.tsx
├── pages/
│   └── NexusAILanding.tsx
├── supabaseClient.ts
└── main.tsx
```

---

## 🔧 Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/spacescohost.git
cd spacescohost
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

> ✅ Don't forget to add `.env` to your `.gitignore`.

---

## ▶️ Development

```bash
npm run dev
```

---

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Go to [https://vercel.com](https://vercel.com) → Import Project
3. Set Framework: `Vite`
4. Add Environment Variables
5. Click **Deploy**

---

## 🛠 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

---


## 🙌 Contributing

Pull requests are welcome! Please open an issue first for major changes.

---

## ✉️ Contact

Built with ❤️ by Sanya Shresta Jathanna.
