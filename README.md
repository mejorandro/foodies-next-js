# 📘 Next.js POC App

## 📖 Overview
This project is a **Proof of Concept (POC) built with Next.js 13+ (App Router)**.  
Its goal is to demonstrate how to create a modern application with:

- **Routes in `/app`** (including dynamic `[slug]`, error handling, and loading states)  
- **Reusable components** (`/components`) with CSS modules  
- **Business logic in `/lib`** to manage data and actions  
- **SQLite integration** for data persistence (meals)  
- **Image upload and input sanitization**  

---

## ⚙️ Tech Stack
- [Next.js 13+](https://nextjs.org/) (App Router, Server Components, Server Actions)  
- [React](https://react.dev/)  
- [Better-SQLite3](https://github.com/WiseLibs/better-sqlite3) — local database  
- [Slugify](https://www.npmjs.com/package/slugify) — slug generation  
- [XSS](https://www.npmjs.com/package/xss) — input sanitization  
- Node.js APIs (`fs`, `stream`) — file and image handling  

---

## 📂 Project Structure
```
app/                  # Main routes (Next.js App Router)
  ├─ layout.js        # Global layout
  ├─ page.js          # Home
  ├─ error.js         # Error page
  ├─ not-found.js     # Custom 404
  ├─ community/       # Community section
  ├─ meals/           # Meals CRUD
      ├─ page.js      # Meals list
      ├─ share/page.js# Form to share a meal
      ├─ [slug]/      # Dynamic meal detail page
components/           # Reusable components
  ├─ main-header/     # Header and navigation
  ├─ meals/           # Meals UI (grid, item, image-picker)
  └─ images/          # Image slideshow
lib/
  ├─ meals.js         # Database logic (SQLite + FS)
  └─ actions.js       # Server actions (form submit)
```

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone [<repo-url>](https://github.com/mejorandro/foodies-next-js)
cd app
npm install
```

### 2. Run development server
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧑‍🍳 Features
- 📸 **Image upload** with storage in `/public/images`  
- 📑 **Instruction sanitization** to prevent XSS  
- 🔎 **Dynamic meal pages** (`/meals/[slug]`)  
- 🌀 **Loading and error states** with dedicated components  
- 🎨 **Scoped styles** with CSS modules  

---

## 🛠️ Roadmap
- 🔐 User authentication (NextAuth.js or JWT)  
- ☁️ Store images in S3 instead of local FS  
- 🌍 Deploy on Vercel with remote database  
- 🧪 Unit and e2e testing (Playwright / Jest)  
