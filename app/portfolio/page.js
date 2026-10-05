"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Code2,
  Layers3,
  Smartphone,
  Database,
  Cloud,
  Sparkles,
  BriefcaseBusiness,
  ChevronDown,
  Target,
  Rocket,
  TrendingUp,
  Camera,
  Video,
  Heart,
  ShoppingBag,
} from "lucide-react";

import "./portfolio.css";

/* =========================================================
   PROJECT CATEGORIES
========================================================= */

const projectCategories = [
  "All",
  "Business Website",
  "Portfolio Website",
  "Web Application",
  "Business",
  "Agriculture",
  "Productivity",
];


/* =========================================================
   PROJECT DETAILS
========================================================= */

const projectDetails = [
  /* =======================================================
     01 — PATIDAR DIGITAL WORLD
  ======================================================= */

  {
    category: "Web Application",
    industry: "Business Technology",
    featured: false,
    number: "01",

    image: "/assets/patidar-digital-world.png",

    imageAlt: "Patidar Digital World website",

    title: "Patidar Digital World",

    description:
      "A business-focused digital platform designed to manage users, workflows, data and day-to-day operations from a centralized system.",

    problem:
      "Businesses often manage different workflows across spreadsheets, emails and disconnected tools.",

    solution:
      "A centralized web platform brings important workflows, users, permissions and business data into one place.",

    features: [
      "Role-based access",
      "Admin dashboard",
      "Business workflows",
      "REST API integration",
      "Responsive interface",
      "Data management",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    stats: [
      ["100+", "Components"],
      ["100+", "APIs"],
      ["20+", "Roles"],
    ],
  },


  /* =======================================================
     02 — RAJMAL PORTFOLIO
  ======================================================= */

  {
    category: "Portfolio Website",
    industry: "Developer Portfolio",
    featured: false,
    number: "02",

    title: "Rajmal — Full Stack Developer",

    description:
      "A modern developer portfolio website created to showcase full-stack development experience, technical skills, professional experience and selected projects.",

    problem:
      "A developer needs more than a traditional resume to demonstrate technical experience, projects, architecture knowledge and real-world development capabilities.",

    solution:
      "A professional portfolio combines project showcases, experience, technical skills, about information, resume access and contact functionality in one responsive experience.",

    features: [
      "Professional hero section",
      "Project showcase",
      "Experience timeline",
      "Technical skills",
      "About section",
      "Resume download",
      "Contact section",
      "Responsive design",
      "Modern UI",
      "SEO-friendly structure",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "CSS",
    ],

    image: "/assets/rajmal-portfolio.png",

    liveUrl: "#",

    stats: [
      ["5+", "Years Experience"],
      ["Full Stack", "Development"],
      ["Modern", "UI/UX"],
    ],
  },


  /* =======================================================
     03 — THE ROYAL TABLE
  ======================================================= */

  {
    category: "Restaurant Website",
    industry: "Hospitality & Food",
    featured: true,
    number: "03",

    title: "The Royal Table",

    description:
      "A modern restaurant website with a digital menu, QR-based table ordering, shopping cart, WhatsApp ordering and table booking experience.",

    problem:
      "Traditional restaurant menus and manual ordering can make it difficult for customers to quickly explore dishes and place orders.",

    solution:
      "A mobile-first digital dining experience allows customers to scan a table QR code, browse the menu, add dishes to a cart and send their order directly through WhatsApp.",

    features: [
      "Digital restaurant menu",
      "QR table ordering",
      "Menu categories",
      "Food search and filtering",
      "Veg / Non-Veg filtering",
      "Food detail pages",
      "Shopping cart",
      "Quantity management",
      "WhatsApp ordering",
      "Table number support",
      "Table booking",
      "Responsive mobile design",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "CSS",
      "Context API",
      "LocalStorage",
      "QR Code",
      "WhatsApp Integration",
    ],

    image: "/assets/royal-table.png",

    imageAlt: "The Royal Table restaurant website",

    liveUrl: "https://royal-table-restaurant.vercel.app/",

    stats: [
      ["QR", "Digital Menu"],
      ["WhatsApp", "Ordering"],
      ["Responsive", "Experience"],
    ],
  },


  /* =======================================================
     04 — 24 BETTING WEBSITE
  ======================================================= */

  {
    category: "Web Platform",
    industry: "Sports & Gaming",
    featured: false,
    number: "04",

    title: "24 Betting Website",

    description:
      "A modern sports betting platform designed to provide users with a fast, responsive and intuitive experience for exploring sports, markets and betting-related information.",

    problem:
      "Sports betting platforms need to handle large amounts of real-time information while keeping the user experience fast, simple and easy to navigate across devices.",

    solution:
      "A responsive web platform with structured sports and betting interfaces, user-focused navigation, scalable backend architecture and API-driven data integration.",

    features: [
      "Sports and event listings",
      "Betting market interface",
      "User authentication",
      "Responsive betting interface",
      "Real-time API integration",
      "User account management",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],

    image: "/assets/24bet.png",

    liveUrl: "#",

    stats: [
      ["Responsive", "Web Platform"],
      ["Real-time", "API Integration"],
      ["Multi-device", "Experience"],
    ],
  },


  /* =======================================================
     05 — KRISHI MITRA
  ======================================================= */

  {
    category: "Agriculture",
    industry: "AgriTech",
    featured: true,
    number: "05",

    title: "Krishi Mitra MP",

    description:
      "A Hindi-first agriculture platform concept that helps farmers access market prices, agriculture information, weather and useful government resources.",

    problem:
      "Agriculture information is often spread across multiple websites and can be difficult to understand quickly.",

    solution:
      "A simple regional platform organizes mandi prices, crops, weather, schemes and educational content in one experience.",

    features: [
      "Mandi price information",
      "Crop information",
      "Weather updates",
      "Government schemes",
      "Hindi-first content",
      "Search-friendly articles",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "REST APIs",
    ],

    image: "/assets/krishi-mitra.png",

    liveUrl: "#",

    stats: [
      ["MP", "Market Focus"],
      ["Hindi", "First UI"],
      ["SEO", "Content Ready"],
    ],
  },


  /* =======================================================
     06 — REAL TIME COLLABORATION
  ======================================================= */

  {
    category: "Productivity",
    industry: "Collaboration",
    featured: false,
    number: "06",

    title: "Real-Time Collaboration Platform",

    description:
      "A real-time collaboration platform concept focused on communication, shared workflows and instant updates between users.",

    problem:
      "Teams need faster communication and synchronized information while working on shared tasks.",

    solution:
      "Real-time communication and event-driven updates create a more connected collaboration experience.",

    features: [
      "Real-time communication",
      "Authentication",
      "User management",
      "Socket-based updates",
      "Secure APIs",
      "Scalable backend",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Socket.IO",
      "MongoDB",
    ],

    image: "/assets/collaboration.png",

    liveUrl: "#",

    stats: [
      ["Real-time", "Updates"],
      ["JWT", "Authentication"],
      ["API", "Architecture"],
    ],
  },


  /* =======================================================
     07 — CRM
  ======================================================= */

  {
    category: "Business",
    industry: "CRM / Management",
    featured: false,
    number: "07",

    title: "CRM & Business Management Platform",

    description:
      "A CRM-style business management platform designed to organize customers, sales processes, inventory, finance and operational workflows.",

    problem:
      "Growing businesses need visibility across multiple departments and business processes.",

    solution:
      "A modular management platform provides separate workflows while keeping business information connected.",

    features: [
      "CRM workflows",
      "Inventory management",
      "Finance modules",
      "Lead management",
      "Role permissions",
      "Business dashboards",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redis",
    ],

    image: "/assets/crm-dashboard.png",

    liveUrl: "#",

    stats: [
      ["8+", "Business Areas"],
      ["70+", "Users"],
      ["Modular", "Architecture"],
    ],
  },


  /* =======================================================
     08 — IDENTITY ADMIN
  ======================================================= */

  {
    category: "Web Application",
    industry: "Identity & Access",
    featured: false,
    number: "08",

    title: "Identity Administration Platform",

    description:
      "An identity administration platform for managing applications, users, roles and access permissions through a centralized interface.",

    problem:
      "Managing application users and permissions manually becomes difficult as teams and products grow.",

    solution:
      "A centralized identity administration interface simplifies user, application and role management.",

    features: [
      "User administration",
      "Application management",
      "Role management",
      "RBAC",
      "Authentication",
      "Permission controls",
    ],

    technologies: [
      "React.js",
      "Vite",
      "JWT",
      "REST APIs",
    ],

    image: "/assets/identity-admin.png",

    liveUrl: "#",

    stats: [
      ["RBAC", "Access"],
      ["JWT", "Security"],
      ["Admin", "Portal"],
    ],
  },


  /* =======================================================
     09 — RESUME BUILDER
  ======================================================= */

  {
    category: "Productivity",
    industry: "Resume & Career",
    featured: false,
    number: "09",

    title: "Resume Builder",

    description:
      "A modern resume builder focused on helping users create structured, professional and ATS-friendly resumes.",

    problem:
      "Creating a professional resume often requires manually formatting documents and maintaining multiple versions.",

    solution:
      "A structured browser-based builder simplifies resume creation with reusable sections and templates.",

    features: [
      "Resume sections",
      "Reusable templates",
      "Live editing",
      "ATS-friendly structure",
      "PDF generation",
      "Responsive UI",
    ],

    technologies: [
      "Next.js",
      "React.js",
      "JavaScript",
      "CSS",
    ],

    image: "/assets/resume-builder.png",

    liveUrl: "#",

    stats: [
      ["ATS", "Focused"],
      ["Live", "Editing"],
      ["PDF", "Ready"],
    ],
  },
];

/* =========================================================
   PORTFOLIO PROCESS
========================================================= */

const portfolioProcess = [
  {
    number: "01",
    icon: Target,
    title: "Understand",
    text:
      "We start by understanding the business problem, target users and expected outcome.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Structure",
    text:
      "We convert requirements into clear features, screens, workflows and technical architecture.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    text:
      "We develop the product with a focus on clean code, usability and performance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Improve",
    text:
      "After launch, we use feedback and business requirements to continuously improve the product.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const portfolioFaqs = [
  {
    q:
      "Can you build a project similar to something in your portfolio?",
    a:
      "Yes. Portfolio projects demonstrate the type of problems and technologies we can work with. Your actual product can be designed around your own business requirements.",
  },
  {
    q:
      "Can you develop a completely custom application?",
    a:
      "Yes. We can build custom dashboards, CRM systems, portals, management software, APIs and other web-based business applications.",
  },
  {
    q:
      "Can you improve an existing project?",
    a:
      "Yes. We can work with an existing codebase for new features, UI improvements, bug fixing, performance optimization and integrations.",
  },
  {
    q:
      "Do you provide deployment support?",
    a:
      "Yes. We can help with production deployment, hosting configuration, environment variables, domains, APIs and basic cloud setup.",
  },
];


/* =========================================================
   PORTFOLIO PAGE
========================================================= */

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projectDetails
      : projectDetails.filter(
          (project) => project.category === activeCategory
        );

  const featuredProject =
    projectDetails.find((project) => project.featured) ||
    projectDetails[0];

  return (
    <main className="portfolio-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-grid" />

        <div className="container portfolio-hero-inner">

          <div className="portfolio-hero-content">

            <span className="eyebrow portfolio-eyebrow">
              <Sparkles size={15} />
              Our Portfolio
            </span>

            <h1 className="portfolio-title">
              Digital products
              <span> built for real people.</span>
            </h1>

            <p className="portfolio-subtitle">
              Explore websites, portfolios, business platforms and
              application concepts created to solve real-world problems
              through thoughtful design and modern technology.
            </p>

            <div className="portfolio-hero-actions">

              <Link
                href="/contact"
                className="btn btn-gradient"
              >
                Start Your Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services"
                className="btn btn-light"
              >
                Explore Services
              </Link>

            </div>

            <div className="portfolio-mini-stats">

              <div>
                <strong>30+</strong>
                <span>Projects & concepts</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Years experience</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Responsive approach</span>
              </div>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="portfolio-hero-visual">

            <div className="portfolio-window">

              <div className="portfolio-window-top">

                <div className="portfolio-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <span>
                  parthtechsolution.com
                </span>

              </div>

              <div className="portfolio-window-body">

                <div className="mock-sidebar">

                  <div className="mock-logo" />

                  <div className="mock-nav active" />
                  <div className="mock-nav" />
                  <div className="mock-nav" />
                  <div className="mock-nav" />

                </div>

                <div className="mock-dashboard">

                  <div className="mock-heading">

                    <div className="mock-heading-line" />

                    <div className="mock-heading-small" />

                  </div>

                  <div className="mock-stats">
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className="mock-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                </div>

              </div>

            </div>


            <div className="portfolio-floating-card floating-project">

              <BriefcaseBusiness size={18} />

              <div>
                <strong>Real Projects</strong>
                <span>Business focused</span>
              </div>

            </div>


            <div className="portfolio-floating-card floating-growth">

              <TrendingUp size={18} />

              <div>
                <strong>Built to Scale</strong>
                <span>Modern technology</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

    {/* =====================================================
    FEATURED PROJECT
===================================================== */}

<section className="section featured-section">
  <div className="container">

    <div className="portfolio-section-heading">
      <span className="eyebrow">
        Featured Project
      </span>

      <h2>
        A closer look at
        <span> what we build.</span>
      </h2>

      <p>
        From business websites to full-stack applications, we create
        digital experiences around real requirements.
      </p>
    </div>


    <div className="featured-project">

      {/* =========================================
          ACTUAL PROJECT IMAGE
      ========================================= */}

      <div className="featured-visual">

        <div className="featured-browser">

          {/* Browser Header */}
          <div className="featured-browser-top">

            <div className="portfolio-dots">
              <i />
              <i />
              <i />
            </div>

            <div className="featured-browser-address">
              royaltablerestaurant.com
            </div>

          </div>


          {/* Actual Image */}
          <div className="featured-image-wrap">

            <Image
              src={featuredProject.image}
              alt="Featured project image"
              fill
              priority
              sizes="
                (max-width: 600px) 100vw,
                (max-width: 1000px) 90vw,
                55vw
              "
              className="featured-project-image"
            />

          </div>

        </div>

      </div>


      {/* =========================================
          PROJECT INFORMATION
      ========================================= */}

      <div className="featured-content">

        <div className="featured-label">
          <span>
            {featuredProject.number}
          </span>

          Featured Case
        </div>


        <h3>
          {featuredProject.industry}
        </h3>


        <p className="featured-description">
          {featuredProject.description}
        </p>


        {/* Challenge */}

        <div className="featured-block">

          <strong>
            The Challenge
          </strong>

          <p>
            {featuredProject.problem}
          </p>

        </div>


        {/* Solution */}

        <div className="featured-block">

          <strong>
            The Solution
          </strong>

          <p>
            {featuredProject.solution}
          </p>

        </div>


        {/* Technologies */}

        <div className="featured-tags">

          {featuredProject.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}

        </div>


        <Link
          href="/contact"
          className="text-link"
        >
          Build something similar

          <ArrowRight size={17} />
        </Link>

      </div>

    </div>

  </div>
</section>

      {/* =====================================================
          PROJECT FILTER
      ===================================================== */}

      <section className="section projects-section">

        <div className="container">

          <div className="portfolio-project-header">

            <div>

              <span className="eyebrow">
                Selected Work
              </span>

              <h2>
                Projects across
                <span> different industries.</span>
              </h2>

            </div>

            <p>
              Browse our demo projects and explore the kind of
              digital experiences we can create for businesses,
              professionals and organizations.
            </p>

          </div>


          {/* FILTER */}

          <div className="portfolio-filter">

            {projectCategories.map((category) => (

              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* PROJECT GRID */}

          <div className="portfolio-grid">

            {filteredProjects.map((project) => (

              <article
                className={`portfolio-card ${
                  project.featured
                    ? "featured-card"
                    : ""
                }`}
                key={project.number}
              >

                {/* IMAGE */}

               <div className="portfolio-card-visual">

  <img
    src={project.image}
    alt={`${project.industry} project`}
    className="portfolio-card-image"
  />

  <div className="portfolio-card-image-overlay" />

  <div className="portfolio-card-number">
    {project.number}
  </div>

  <span className="portfolio-category">
    {project.category}
  </span>

</div>


                {/* CONTENT */}

                <div className="portfolio-card-body">

                  <div className="portfolio-card-industry">
                    {project.industry}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  {/* FEATURES */}

                  <div className="portfolio-card-features">

                    {project.features
                      .slice(0, 4)
                      .map((feature) => (

                        <span key={feature}>

                          <CheckCircle2 size={14} />

                          {feature}

                        </span>

                      ))}

                  </div>


                  {/* FOOTER */}

                  <div className="portfolio-card-footer">

                    <div className="portfolio-tech">

                      {project.technologies
                        .slice(0, 3)
                        .map((tech) => (

                          <span key={tech}>
                            {tech}
                          </span>

                        ))}

                    </div>


                    <Link
                      href="/contact"
                      className="portfolio-view-btn"
                      aria-label={`Discuss ${project.title}`}
                    >
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {filteredProjects.length === 0 && (

            <div className="portfolio-empty">

              <h3>
                No projects found
              </h3>

              <p>
                Try another category to explore our work.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          PROJECT NUMBERS
      ===================================================== */}

      <section className="section portfolio-numbers-section">

        <div className="container">

          <div className="portfolio-numbers">

            <div>
              <strong>30+</strong>
              <span>
                Projects & digital products
              </span>
            </div>

            <div>
              <strong>100+</strong>
              <span>
                Reusable components
              </span>
            </div>

            <div>
              <strong>100+</strong>
              <span>
                API integrations & endpoints
              </span>
            </div>

            <div>
              <strong>5+</strong>
              <span>
                Years of development experience
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW WE BUILD
      ===================================================== */}

      <section className="section portfolio-process-section">

        <div className="container">

          <div className="portfolio-section-heading center-heading">

            <span className="eyebrow">
              How We Build
            </span>

            <h2>
              Every project starts with
              <span> the problem.</span>
            </h2>

            <p>
              Technology is only useful when it helps achieve
              a real business or user outcome.
            </p>

          </div>


          <div className="portfolio-process-grid">

            {portfolioProcess.map((item) => {

              const Icon = item.icon;

              return (

                <article
                  className="portfolio-process-card"
                  key={item.number}
                >

                  <div className="portfolio-process-top">

                    <div className="portfolio-process-icon">
                      <Icon size={21} />
                    </div>

                    <span>
                      {item.number}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY
      ===================================================== */}

      <section className="section portfolio-tech-section">

        <div className="container">

          <div className="portfolio-tech-box">

            <div className="portfolio-tech-intro">

              <span className="eyebrow">
                Technology
              </span>

              <h2>
                Built with tools
                <span> that scale.</span>
              </h2>

              <p>
                We select technologies based on project
                requirements, maintainability, performance
                and expected growth.
              </p>

            </div>


            <div className="portfolio-tech-list">

              <div>
                <Code2 size={20} />
                <span>Frontend</span>
                <strong>
                  React.js / Next.js
                </strong>
              </div>

              <div>
                <Layers3 size={20} />
                <span>Backend</span>
                <strong>
                  Node.js / Express.js
                </strong>
              </div>

              <div>
                <Database size={20} />
                <span>Database</span>
                <strong>
                  MongoDB / SQL
                </strong>
              </div>

              <div>
                <Cloud size={20} />
                <span>Cloud</span>
                <strong>
                  AWS / Azure
                </strong>
              </div>

              <div>
                <Smartphone size={20} />
                <span>Experience</span>
                <strong>
                  Responsive UI
                </strong>
              </div>

              <div>
                <Layers3 size={20} />
                <span>Architecture</span>
                <strong>
                  REST / Real-time
                </strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="section portfolio-faq-section">

        <div className="container">

          <div className="portfolio-faq-layout">

            <div className="portfolio-faq-intro">

              <span className="eyebrow">
                FAQ
              </span>

              <h2>
                Want to know
                <span> more?</span>
              </h2>

              <p>
                A few common questions about our projects
                and development capabilities.
              </p>

              <Link
                href="/contact"
                className="btn btn-primary"
              >
                Talk to Us
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="portfolio-faq-list">

              {portfolioFaqs.map(
                (faq, index) => {

                  const open =
                    openFaq === index;

                  return (

                    <div
                      className={`portfolio-faq ${
                        open ? "open" : ""
                      }`}
                      key={faq.q}
                    >

                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(
                            open ? -1 : index
                          )
                        }
                      >

                        <span>
                          {faq.q}
                        </span>

                        <ChevronDown
                          size={19}
                        />

                      </button>


                      <div className="portfolio-faq-answer">

                        <p>
                          {faq.a}
                        </p>

                      </div>

                    </div>

                  );

                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="portfolio-final-cta">

        <div className="container">

          <div className="portfolio-final-content">

            <span className="eyebrow">
              Have an idea?
            </span>

            <h2>
              Let's build your
              <span> next project.</span>
            </h2>

            <p>
              Tell us about your website, web application,
              business platform or custom software idea.
            </p>

            <Link
              href="/contact"
              className="btn btn-gradient"
            >
              Start a Project
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}