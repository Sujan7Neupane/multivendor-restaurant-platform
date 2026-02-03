# Multi-Vendor Restaurant Platform

This is a **full-stack multi-vendor restaurant platform** built with **Next.js (App Router)** and **TypeScript**, using **MySQL** for the database.
It allows multiple restaurants to manage their products, customers to browse and order from different restaurants, and a super admin to oversee the platform.

---

## Features

* Multi-vendor support (restaurants, admins, superadmins)
* Customer-facing website with restaurant listings and product catalogs
* Admin dashboards for managing products, orders, and reports
* Superadmin panel for managing restaurants, users, and subscriptions
* Payment integration and subscription management
* Optimized fonts using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
* TypeScript for type safety and scalability

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sujan7neupane/multivendor-restaurant-platform.git
cd multivendor-restaurant-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file at the root with your environment-specific variables such as database credentials, API keys, and JWT secrets. **Do not commit `.env` to GitHub.**

If you need guidance or a sample `.env` file, you can contact the project maintainer at: **[sujan7neupane7@gmail.com](mailto:sujan7neupane7@gmail.com)**


### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
Start editing the project by modifying `src/app/page.tsx`. Changes auto-update in the browser.

---

## Folder Structure

```
src/
 ├─ app/            # Frontend routes (App Router) + API routes
 ├─ components/     # UI components
 ├─ hooks/          # React hooks
 ├─ store/          # State management
 ├─ lib/            # Shared utilities (db connection, API wrappers)
 ├─ models/         # Database models
 ├─ services/       # Backend services (payments, subscriptions, email)
 ├─ middlewares/    # Backend middleware (auth, roles)
 ├─ types/          # TypeScript types
 ├─ utils/          # Shared helpers
 └─ config/         # App configuration
```

---

## Fonts

This project uses **Poppins** via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts):

```ts
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
```

Apply it globally in `src/app/layout.tsx`:

```tsx
<html lang="en" className={poppins.className}>
  <body>{children}</body>
</html>
```

---

## Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Next.js App Router Guide](https://nextjs.org/docs/app)
* [TypeScript Documentation](https://www.typescriptlang.org/docs/)
* [MySQL Documentation](https://dev.mysql.com/doc/)

---

## Deployment

The easiest way to deploy this project is using **Vercel**:

1. Push your repo to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import your project.
3. Add your environment variables in the Vercel dashboard.
4. Deploy — your app will be live instantly.

Check [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for advanced deployment options.

---

## License

MIT © 2026 Sujan Neupane