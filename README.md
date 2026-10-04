# Parth Tech Solution

A modern, responsive business website for **Parth Tech Solution**, showcasing web development, web applications, e-commerce solutions, custom software development, and digital services.

The website is designed with a clean, professional UI and focuses on performance, responsiveness, scalability, and conversion.

---

## 🚀 Live Website

**Website:** `https://your-domain.com`

> Replace the URL above with your actual production domain.

---

## 📌 About the Project

Parth Tech Solution is a digital solutions website built to present the company's services, portfolio, capabilities, and contact information.

The website includes:

* Professional landing page
* Services showcase
* Portfolio / projects
* About company section
* Contact page
* Privacy Policy
* Terms & Conditions
* Responsive navigation
* Mobile-friendly layouts
* WhatsApp contact integration
* SEO-ready page structure
* Portfolio project images
* Modern animations and interactive UI

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* JavaScript
* CSS3
* Lucide React
* Next/Image
* Next/Link

### Development

* ESLint
* npm
* Git
* GitHub

### Deployment

* Vercel
* Custom Domain

---

## 📂 Project Structure

```text
parth-tech-solution/
│
├── app/
│   ├── about/
│   │   └── page.js
│   │
│   ├── contact/
│   │   └── page.js
│   │
│   ├── portfolio/
│   │   └── page.js
│   │
│   ├── privacy-policy/
│   │   ├── page.js
│   │   └── legal.css
│   │
│   ├── services/
│   │   ├── page.js
│   │   └── services.css
│   │
│   ├── terms-and-conditions/
│   │   └── page.js
│   │
│   ├── globals.css
│   ├── page.js
│   └── layout.js
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Heading.js
│   └── ServiceIcon.js
│
├── data/
│   └── site.js
│
├── public/
│   └── assets/
│       ├── 24bet.png
│       └── projects/
│           ├── dms-demo.png
│           ├── agriculture-demo.png
│           ├── ecommerce-demo.png
│           └── resume-demo.png
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

---

## 🎨 Main Pages

### Home

The homepage contains:

* Hero section
* Business-focused messaging
* Technology trust section
* Company statistics
* Services
* Why choose us
* Development process
* Selected portfolio
* Business solutions
* Testimonials
* FAQ
* Final CTA

---

### About

The About page presents:

* Company introduction
* Mission
* Vision
* Core values
* Capabilities
* Technologies
* Development approach
* Company timeline
* Frequently asked questions

---

### Services

Services currently include:

* Website Development
* Web Application Development
* E-Commerce Solutions
* Custom Software Development

The services page provides detailed information about each service, benefits, technologies, process, and FAQs.

---

### Portfolio

The portfolio section showcases real and demonstration projects.

Current projects include:

1. CRM & Business Management Platform
2. Agriculture Information Platform
3. 24 Betting Website
4. E-Commerce Platform
5. Resume Builder

Portfolio images are stored inside:

```text
public/assets/
```

and referenced using public paths such as:

```js
image: "/assets/24bet.png"
```

For project images:

```js
image: "/assets/projects/dms-demo.png"
```

---

## 🖼️ Portfolio Images

Next.js serves files inside the `public` directory from the website root.

For example:

```text
public/assets/24bet.png
```

should be referenced as:

```jsx
<Image
  src="/assets/24bet.png"
  alt="24 Betting Website"
  fill
  className="portfolio-project-image"
/>
```

### Important

Do **not** use:

```text
/public/assets/24bet.png
```

Use:

```text
/assets/24bet.png
```

---

## 📊 Portfolio Projects

### 01 — CRM & Business Management Platform

A centralized business management platform designed to manage customers, workflows, users, permissions, and business data.

**Technology:**

* React.js
* Node.js
* Express.js
* MongoDB

---

### 02 — Agriculture Information Platform

A modern agriculture-focused platform designed to provide farmers with useful agricultural information, market information, weather information, and government-related resources.

**Technology:**

* Next.js
* React.js
* Node.js
* Express.js
* MongoDB
* REST APIs

---

### 03 — 24 Betting Website

A responsive sports betting web platform designed around sports, events, markets, user accounts, and API-driven information.

**Technology:**

* React.js
* Node.js
* Express.js
* MongoDB
* REST APIs

**Image:**

```text
public/assets/24bet.png
```

---

### 04 — E-Commerce Platform

A modern online shopping platform with product browsing, product details, shopping experience, and business management functionality.

**Technology:**

* React.js
* Node.js
* Express.js
* MongoDB

---

### 05 — Resume Builder

A professional resume-building application that allows users to create structured resumes using modern templates.

**Technology:**

* Next.js
* React.js
* JavaScript
* CSS

---

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd parth-tech-solution
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Runs ESLint checks.

---

## 🔐 Environment Variables

If environment variables are required, create:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919340004380
```

Never commit `.env.local` or other environment files to GitHub.

---

## 🧹 Git Ignore

The project ignores common generated and sensitive files:

```gitignore
node_modules/
.next/
out/
dist/
build/

.env
.env.*
!.env.example

.vercel/

*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

coverage/
.cache/
.turbo/

.DS_Store
Thumbs.db

.vscode/
.idea/

*.tmp
*.temp
```

---

## 📱 Responsive Design

The website is designed to work across:

* Mobile phones
* Tablets
* Laptops
* Desktop computers
* Large screens

Responsive breakpoints are implemented using CSS media queries.

The layout adapts:

```text
Desktop
   ↓
Tablet
   ↓
Mobile
```

---

## 🎯 Design Goals

The website follows these principles:

* Clean visual hierarchy
* Professional business appearance
* Mobile-first experience
* Fast loading
* Accessible navigation
* Clear call-to-actions
* Consistent typography
* Modern cards and UI components
* Responsive portfolio presentation
* Scalable component structure

---

## 🔗 Contact

### Website

`https://your-domain.com`

### WhatsApp

The website includes a direct WhatsApp CTA for customer inquiries.

Current WhatsApp integration:

```text
https://wa.me/919340004380
```

Update the number if required.

---

## 📄 Legal Pages

The website includes:

* Privacy Policy
* Terms & Conditions

These pages should be reviewed and customized according to the actual services, data collection, payment processing, analytics, cookies, and business practices of Parth Tech Solution.

---

## 🚀 Deployment

### Recommended Deployment

For this Next.js business website:

```text
GitHub
   ↓
Vercel
   ↓
Custom Domain
   ↓
Production Website
```

### Deploy to Vercel

1. Push the project to GitHub.
2. Create/login to your Vercel account.
3. Import the GitHub repository.
4. Select the Next.js project.
5. Configure environment variables if required.
6. Deploy.
7. Add your custom domain.
8. Configure DNS.
9. Verify HTTPS.
10. Test all pages and forms.

---

## 🔄 Deployment Workflow

After making changes:

```bash
git add .
```

```bash
git commit -m "Update website"
```

```bash
git push origin main
```

If the GitHub repository is connected to Vercel, Vercel automatically creates a new deployment.

---

## 🧪 Before Production

Check the following before launching:

* [ ] Home page
* [ ] About page
* [ ] Services page
* [ ] Portfolio page
* [ ] Contact page
* [ ] Privacy Policy
* [ ] Terms & Conditions
* [ ] Mobile responsiveness
* [ ] Tablet responsiveness
* [ ] Desktop responsiveness
* [ ] Portfolio images
* [ ] Navigation links
* [ ] WhatsApp button
* [ ] Contact form
* [ ] SEO metadata
* [ ] Favicon
* [ ] Open Graph image
* [ ] 404 page
* [ ] Production build
* [ ] HTTPS
* [ ] Custom domain

---

## 📈 Future Improvements

Possible future additions:

* Contact form backend
* Email notifications
* Admin dashboard
* CMS for portfolio projects
* Blog
* Customer testimonials management
* Google Analytics
* Search Console
* SEO optimization
* Sitemap
* Robots.txt
* Structured data / Schema.org
* Client dashboard
* Project inquiry management
* Online quotation system
* Payment integration

---

## 👨‍💻 Developer

**Parth Tech Solution**

Digital solutions for growing businesses.

Services include:

* Website Development
* Web Application Development
* E-Commerce Development
* Custom Software Development
* API Development
* Business Automation
* Cloud & Deployment Solutions

---

## ⭐ License

This project is proprietary and intended for Parth Tech Solution.

The source code, design, content, images, branding, and other project assets should not be reused, redistributed, or commercially reproduced without permission.

---

## 📌 Project Status

**Status:** Production-ready website / actively maintained

**Technology:** Next.js + React + JavaScript + CSS

**Deployment:** Vercel

**Responsive:** Yes

**Portfolio Images:** Yes
#   p a r t h - t e c h - s o l u t i o n  
 