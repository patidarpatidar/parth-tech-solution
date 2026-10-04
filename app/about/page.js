
"use client";
import "./about.css";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Lightbulb,
  Target,
  Users,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Rocket,
  Layers3,
  Globe2,
  Database,
  Cloud,
  ChevronDown,
  Sparkles,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Think Before We Build",
      text: "We first understand the business problem, users and goals before choosing technology or writing code.",
    },
    {
      icon: Target,
      title: "Business Focused",
      text: "Every feature should have a purpose. We focus on practical solutions that create real value for your business.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Reliability",
      text: "Clean code, responsive interfaces, security-conscious development and proper testing are part of our process.",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Partnership",
      text: "We don't disappear after launch. We aim to build long-term relationships through support and continuous improvement.",
    },
  ];

  const capabilities = [
    {
      icon: Globe2,
      title: "Web Development",
      text: "Modern, responsive websites and web platforms built for performance and usability.",
    },
    {
      icon: Code2,
      title: "Custom Software",
      text: "Business applications, dashboards, portals and internal tools tailored to your workflow.",
    },
    {
      icon: ShoppingBagIcon,
      title: "E-Commerce",
      text: "Customer-friendly online stores with product management, orders and scalable architecture.",
    },
    {
      icon: Database,
      title: "Backend & APIs",
      text: "Reliable APIs, database architecture, authentication and integrations for your applications.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      text: "Deployment and cloud-ready applications using modern hosting and infrastructure practices.",
    },
    {
      icon: Zap,
      title: "Performance",
      text: "Fast-loading experiences, optimized assets and scalable application architecture.",
    },
  ];

  const milestones = [
    {
      year: "01",
      title: "Understand",
      text: "We learn about your business, customers, challenges and objectives.",
    },
    {
      year: "02",
      title: "Plan",
      text: "We define the right scope, technology, pages, features and development roadmap.",
    },
    {
      year: "03",
      title: "Create",
      text: "Design and development happen with continuous feedback and transparent communication.",
    },
    {
      year: "04",
      title: "Improve",
      text: "After launch, we monitor, improve and extend the product as your business grows.",
    },
  ];

  const technologies = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Redis",
    "AWS",
    "Azure",
    "Docker",
    "REST APIs",
  ];

  const faqs = [
    {
      q: "What type of businesses do you work with?",
      a: "We can work with startups, small businesses, service companies, organizations and growing businesses that need a professional digital presence or custom software.",
    },
    {
      q: "Do you only create websites?",
      a: "No. Along with business websites, we can build web applications, dashboards, e-commerce platforms, APIs, authentication systems and custom software.",
    },
    {
      q: "Can you work with an existing project?",
      a: "Yes. We can review an existing application and help with new features, UI improvements, performance, bug fixes, refactoring and ongoing development.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. We can provide maintenance and support for updates, improvements, troubleshooting and future feature development.",
    },
  ];

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="about-hero">
        <div className="about-hero-grid" />

        <div className="container about-hero-content">
          <div className="about-hero-copy">
            <span className="eyebrow">
              <Sparkles size={14} />
              About Parth Tech Solution
            </span>

            <h1 className="title">
              We turn technology into{" "}
              <span className="gradient-text">
                useful business solutions.
              </span>
            </h1>

            <p className="subtitle">
              We help businesses build a stronger digital presence through
              modern websites, web applications, e-commerce platforms and
              custom software.
            </p>

            <div className="about-hero-actions">
              <Link className="btn btn-gradient" href="/contact">
                Start a Conversation
                <ArrowRight size={17} />
              </Link>

              <Link className="btn btn-light" href="/services">
                Explore Services
              </Link>
            </div>

            <div className="about-trust-row">
              <span>
                <CheckCircle2 size={15} />
                Practical solutions
              </span>

              <span>
                <CheckCircle2 size={15} />
                Modern technology
              </span>

              <span>
                <CheckCircle2 size={15} />
                Long-term support
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="about-hero-visual">
            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />

            <div className="about-center-card">
              <div className="about-logo-mark">
                <Code2 size={30} />
              </div>

              <span>PARTH</span>
              <strong>TECH SOLUTION</strong>

              <div className="about-center-status">
                <span />
                Building digital products
              </div>
            </div>

            <div className="about-floating about-floating-one">
              <Code2 size={17} />
              <div>
                <strong>Clean Code</strong>
                <small>Maintainable architecture</small>
              </div>
            </div>

            <div className="about-floating about-floating-two">
              <Rocket size={17} />
              <div>
                <strong>Built to Grow</strong>
                <small>Scalable solutions</small>
              </div>
            </div>

            <div className="about-floating about-floating-three">
              <Users size={17} />
              <div>
                <strong>People First</strong>
                <small>Designed for users</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div>
            <span className="eyebrow">Who we are</span>

            <h2 className="section-title">
              A technology partner for businesses that want to move forward.
            </h2>
          </div>

          <div>
            <p className="large-text">
              Parth Tech Solution is a digital development company focused on
              creating websites and software that solve real business
              problems.
            </p>

            <p className="muted about-body-text">
              We believe technology should simplify work instead of making it
              complicated. That's why we combine clean design, modern
              development practices and business understanding to create
              solutions that are easy to use today and ready to evolve
              tomorrow.
            </p>

            <Link className="text-link" href="/contact">
              Let's discuss your project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="section about-stats-section">
        <div className="container">
          <div className="about-stat-grid">
            <div className="about-stat">
              <Code2 size={22} />
              <strong>5+</strong>
              <span>Years of development experience</span>
            </div>

            <div className="about-stat">
              <Globe2 size={22} />
              <strong>30+</strong>
              <span>Projects and digital solutions</span>
            </div>

            <div className="about-stat">
              <TrendingUp size={22} />
              <strong>100%</strong>
              <span>Responsive development approach</span>
            </div>

            <div className="about-stat">
              <HeartHandshake size={22} />
              <strong>Long-term</strong>
              <span>Support and partnership mindset</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="section mission-section">
        <div className="container mission-grid">
          <article className="mission-card mission-main">
            <div className="mission-icon">
              <Target size={22} />
            </div>

            <span className="eyebrow">Our mission</span>

            <h2>
              Make professional technology accessible to growing businesses.
            </h2>

            <p>
              Many businesses have great ideas but struggle to turn those
              ideas into reliable digital products. Our mission is to simplify
              that journey—from idea and design to development and launch.
            </p>
          </article>

          <article className="mission-card">
            <div className="mission-icon">
              <Lightbulb size={22} />
            </div>

            <span className="eyebrow">Our vision</span>

            <h3>Build useful products that create lasting value.</h3>

            <p>
              We want every solution we create to be useful, maintainable and
              capable of growing alongside the business.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="section">
        <div className="container">
          <div className="about-heading">
            <div>
              <span className="eyebrow">
                <Sparkles size={14} />
                What matters to us
              </span>

              <h2 className="section-title">
                Principles behind every project.
              </h2>
            </div>

            <p className="muted">
              Good software is not only about technology. It is also about
              understanding people, business and long-term goals.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.title}>
                  <div className="value-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{value.title}</h3>

                  <p className="muted">{value.text}</p>

                  <div className="value-arrow">
                    <ArrowRight size={16} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}
      <section className="section capabilities-section">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">
              <Layers3 size={14} />
              Our capabilities
            </span>

            <h2 className="section-title">
              From frontend experiences to complete platforms.
            </h2>

            <p className="muted">
              We can help at any stage of your digital journey, whether you
              need a simple website or a complete business application.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="capability-card" key={item.title}>
                  <div className="capability-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{item.title}</h3>

                  <p className="muted">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS TIMELINE
      ====================================================== */}
      <section className="section timeline-section">
        <div className="container">
          <div className="timeline-heading">
            <span className="eyebrow">Our approach</span>

            <h2 className="section-title">
              Simple, transparent and focused on outcomes.
            </h2>

            <p className="muted">
              We keep communication clear and make sure every stage has a
              purpose.
            </p>
          </div>

          <div className="timeline">
            {milestones.map((item, index) => (
              <article className="timeline-item" key={item.year}>
                <div className="timeline-marker">
                  {item.year}
                </div>

                <div className="timeline-line" />

                <div className="timeline-content">
                  <span>STEP {index + 1}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      <section className="section technology-section">
        <div className="container technology-layout">
          <div>
            <span className="eyebrow">
              <Code2 size={14} />
              Technology
            </span>

            <h2 className="section-title">
              Modern tools. Practical architecture.
            </h2>

            <p className="muted technology-description">
              We select technologies according to the project rather than
              forcing every business into the same stack.
            </p>

            <Link className="btn btn-outline" href="/services">
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="technology-cloud">
            {technologies.map((technology, index) => (
              <span
                key={technology}
                className={`tech-bubble tech-bubble-${(index % 4) + 1}`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="section about-faq-section">
        <div className="container about-faq-grid">
          <div>
            <span className="eyebrow">
              <MessageCircle size={14} />
              Frequently asked
            </span>

            <h2 className="section-title">
              Before we start working together.
            </h2>

            <p className="muted">
              A few common questions about our work and development process.
            </p>

            <Link className="text-link" href="/contact">
              Have another question?
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="about-faq-list">
            {faqs.map((faq, index) => (
              <details
                className="about-faq-item"
                key={faq.q}
                open={index === 0}
              >
                <summary>
                  {faq.q}
                  <ChevronDown size={18} />
                </summary>

                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    
    </main>
  );
}

function ShoppingBagIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8h12l1 13H5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}