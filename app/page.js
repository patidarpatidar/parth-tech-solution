
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Globe2,
  ShoppingCart,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Layers3,
  MessageCircle,
  ChevronDown,
  Star,
  Check,
  Play,
  ExternalLink,
} from "lucide-react";

import Heading from "@/components/Heading";
import ServiceIcon from "@/components/ServiceIcon";
import { services, projects } from "@/data/site";

const technologies = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "AWS",
  "Azure",
  "Redis",
  "Docker",
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your business, users, goals and technical requirements before writing code.",
    icon: Users,
  },
  {
    number: "02",
    title: "Design",
    text: "We create a clean, conversion-focused interface that works beautifully across devices.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Development",
    text: "Our developers build scalable and maintainable solutions using modern technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, optimize, deploy and help you get your product ready for real users.",
    icon: Zap,
  },
];

const benefits = [
  "Modern responsive UI",
  "SEO-friendly architecture",
  "Fast page performance",
  "Secure development practices",
  "Scalable backend architecture",
  "Easy future maintenance",
];

const testimonials = [
  {
    name: "Business Owner",
    role: "Small Business",
    text: "The website gave our business a much more professional online presence and made it easier for customers to contact us.",
  },
  {
    name: "Startup Founder",
    role: "Technology Startup",
    text: "The development process was practical and focused on what we actually needed instead of unnecessary features.",
  },
  {
    name: "Marketing Manager",
    role: "Growing Business",
    text: "The new website is fast, responsive and much easier for our customers to navigate.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A typical business website can take around 7–15 working days depending on the number of pages, content and custom functionality.",
  },
  {
    q: "Can you build custom web applications?",
    a: "Yes. We can build dashboards, CRM systems, portals, e-commerce platforms, APIs and other custom business applications.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Yes. Every website is designed with responsive layouts so it works across mobile, tablet, laptop and desktop screens.",
  },
  {
    q: "Do you provide website maintenance?",
    a: "Yes. Maintenance and ongoing development can be provided for content updates, improvements, bug fixes and new features.",
  },
];

export default function Home() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero home-hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={15} />
              Digital solutions for growing businesses
            </span>

            <h1 className="title">
              We build digital products that{" "}
              <span className="gradient-text">move businesses forward.</span>
            </h1>

            <p className="subtitle">
              Professional websites, web applications, e-commerce platforms
              and custom software designed around your business goals.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-gradient" href="/contact">
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link className="btn btn-light" href="/portfolio">
                Explore Our Work
                <ExternalLink size={16} />
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <CheckCircle2 size={17} />
                Mobile-first
              </div>

              <div>
                <CheckCircle2 size={17} />
                SEO-ready
              </div>

              <div>
                <CheckCircle2 size={17} />
                Scalable
              </div>
            </div>
          </div>

          {/* Interactive product visual */}
          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="dashboard-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="dashboard-url">
                  parthtechsolution.com
                </div>

                <div className="status-dot">
                  <span />
                  Live
                </div>
              </div>

              <div className="dashboard-body">
                <div className="dashboard-sidebar">
                  <div className="side-logo">P</div>
                  <span className="active-side" />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="dashboard-main">
                  <div className="mini-header">
                    <div>
                      <small>Business Overview</small>
                      <h4>Good morning 👋</h4>
                    </div>

                    <div className="avatar">PT</div>
                  </div>

                  <div className="metric-grid">
                    <div className="metric-card">
                      <span>Total Visitors</span>
                      <strong>24.8K</strong>
                      <small>
                        <TrendingUp size={12} /> +18.4%
                      </small>
                    </div>

                    <div className="metric-card">
                      <span>Conversions</span>
                      <strong>1,284</strong>
                      <small>
                        <TrendingUp size={12} /> +12.7%
                      </small>
                    </div>
                  </div>

                  <div className="chart-card">
                    <div className="chart-heading">
                      <div>
                        <span>Growth Overview</span>
                        <strong>+32.8%</strong>
                      </div>
                      <span className="chart-period">This year</span>
                    </div>

                    <div className="fake-chart">
                      <div className="chart-grid-line" />
                      <div className="chart-grid-line" />
                      <div className="chart-grid-line" />

                      <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        className="chart-svg"
                      >
                        <defs>
                          <linearGradient
                            id="chartGradient"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                          >
                            <stop offset="0%" stopOpacity="0.35" />
                            <stop offset="100%" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        <path
                          d="M0 125 C55 110 65 118 105 90 C150 55 160 100 205 76 C245 52 255 82 300 58 C340 37 360 60 390 32 C430 8 450 30 500 10 L500 150 L0 150 Z"
                          fill="url(#chartGradient)"
                        />

                        <path
                          d="M0 125 C55 110 65 118 105 90 C150 55 160 100 205 76 C245 52 255 82 300 58 C340 37 360 60 390 32 C430 8 450 30 500 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="activity-row">
                    <div>
                      <span className="activity-icon">
                        <Globe2 size={15} />
                      </span>
                      <span>Website traffic</span>
                    </div>
                    <strong>+24%</strong>
                  </div>

                  <div className="activity-row">
                    <div>
                      <span className="activity-icon">
                        <ShoppingCart size={15} />
                      </span>
                      <span>Online orders</span>
                    </div>
                    <strong>+18%</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-one">
              <span>
                <ShieldCheck size={17} />
              </span>
              <div>
                <strong>Secure</strong>
                <small>Built for reliability</small>
              </div>
            </div>

            <div className="floating-card floating-two">
              <Zap size={17} />
              <strong>Fast Performance</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
      ====================================================== */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-inner">
            <p>Technology we use to build reliable products</p>

            <div className="technology-list">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats enhanced-stats">
            <div className="stat">
              <span className="stat-icon">
                <Code2 size={19} />
              </span>
              <b>5+</b>
              <span className="muted">Years experience</span>
            </div>

            <div className="stat">
              <span className="stat-icon">
                <Globe2 size={19} />
              </span>
              <b>30+</b>
              <span className="muted">Projects delivered</span>
            </div>

            <div className="stat">
              <span className="stat-icon">
                <Users size={19} />
              </span>
              <b>20+</b>
              <span className="muted">Business solutions</span>
            </div>

            <div className="stat">
              <span className="stat-icon">
                <Zap size={19} />
              </span>
              <b>100%</b>
              <span className="muted">Responsive approach</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="section services-section">
        <div className="container">
          <Heading
            eyebrow="What we build"
            title="Everything you need to grow online"
            text="From your first business website to a complete digital platform, we build practical solutions focused on usability, performance and growth."
          />

          <div className="grid g3 service-grid">
            {services.map(([id, icon, title, text], index) => (
              <article className="card service service-card-pro" key={id}>
                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <ServiceIcon name={icon} />

                <h3>{title}</h3>

                <p className="muted service-description">{text}</p>

                <Link className="service-link" href={`/services#${id}`}>
                  Explore service
                  <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>

          <div className="center-button">
            <Link className="btn btn-outline" href="/services">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY US
      ====================================================== */}
      <section className="section why-section">
        <div className="container why-grid">
          <div className="why-visual">
            <div className="code-window">
              <div className="code-top">
                <span />
                <span />
                <span />
                <label>parth-tech-solution.js</label>
              </div>

              <pre>
{`const business = {
  idea: "Your vision",
  design: "Modern UX",
  technology: "Scalable",
  performance: "Fast",
  security: "Reliable",
  result: "Business growth"
};

build(business);`}
              </pre>

              <div className="code-result">
                <CheckCircle2 size={16} />
                Production ready
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">
              <Sparkles size={14} />
              Why Parth Tech Solution
            </span>

            <h2 className="section-title">
              We focus on business outcomes, not just writing code.
            </h2>

            <p className="section-text">
              Your website should do more than look good. It should communicate
              your value, build trust, perform quickly and make it easy for
              customers to take action.
            </p>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div className="benefit" key={benefit}>
                  <span>
                    <Check size={15} />
                  </span>
                  {benefit}
                </div>
              ))}
            </div>

            <Link className="btn btn-gradient" href="/about">
              Why Choose Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="section process-section">
        <div className="container">
          <Heading
            eyebrow="How we work"
            title="A simple process from idea to launch"
            text="A clear process keeps the project focused, transparent and easier to manage."
          />

          <div className="process-grid">
            {process.map((item) => {
              const Icon = item.icon;

              return (
                <article className="process-card" key={item.number}>
                  <div className="process-top">
                    <span className="process-number">{item.number}</span>
                    <Icon size={22} />
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
          PORTFOLIO
      ====================================================== */}
      <section className="section portfolio-section">
        <div className="container">
          <div className="section-heading-row">
            <Heading
              eyebrow="Selected work"
              title="Built for real business needs"
              text="A selection of web platforms, business websites and digital experiences."
            />

            <Link className="desktop-view-link" href="/portfolio">
              View portfolio
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="portfolio-grid">
  {projects.slice(0, 4).map(([name, description, image], index) => (
    <Link
      className="portfolio-card"
      href="/portfolio"
      key={name}
    >
      <div className="portfolio-cover">
        {image ? (
          <div className="portfolio-image-wrapper">
            <Image
              src={image}
              alt={`${name} project preview`}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 50vw"
              className="portfolio-project-image"
              priority={index === 0}
            />
          </div>
        ) : (
          <div className="portfolio-image-placeholder">
            <Code2 size={34} />
            <span>Project Preview</span>
          </div>
        )}

        <span className="portfolio-open">
          <ExternalLink size={17} />
        </span>
      </div>

      <div className="portfolio-info">
        <span>{String(index + 1).padStart(2, "0")}</span>

        <h3>{name}</h3>

        <p>{description}</p>

        <small>
          View case study →
        </small>
      </div>
    </Link>
  ))}
</div>

          <div className="mobile-center-button">
            <Link className="btn btn-outline" href="/portfolio">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS SOLUTIONS
      ====================================================== */}
      <section className="section solutions-section">
        <div className="container">
          <div className="solutions-card">
            <div className="solutions-content">
              <span className="eyebrow">
                <Sparkles size={14} />
                Beyond websites
              </span>

              <h2>
                Need a complete digital solution for your business?
              </h2>

              <p>
                We can connect your website with APIs, databases, dashboards,
                authentication, payments, notifications and other business
                systems.
              </p>

              <div className="solution-pills">
                <span>
                  <Database size={14} /> APIs
                </span>
                <span>
                  <ShieldCheck size={14} /> Authentication
                </span>
                <span>
                  <Cloud size={14} /> Cloud
                </span>
                <span>
                  <Smartphone size={14} /> Responsive
                </span>
              </div>

              <Link className="btn btn-gradient" href="/contact">
                Discuss Your Idea
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="solutions-visual">
              <div className="solution-node node-one">
                <Globe2 size={18} />
                Website
              </div>

              <div className="solution-node node-two">
                <Database size={18} />
                Database
              </div>

              <div className="solution-node node-three">
                <Cloud size={18} />
                Cloud
              </div>

              <div className="solution-core">
                <Code2 size={32} />
                <strong>YOUR<br />BUSINESS</strong>
              </div>

              <div className="connection connection-one" />
              <div className="connection connection-two" />
              <div className="connection connection-three" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="section testimonials-section">
        <div className="container">
          <Heading
            eyebrow="Client experience"
            title="Built with trust and long-term thinking"
            text="We believe a successful project is one that continues to provide value after launch."
          />

          <div className="grid g3">
            {testimonials.map((item) => (
              <article className="card testimonial-card" key={item.name}>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={15} fill="currentColor" />
                  ))}
                </div>

                <p>"{item.text}"</p>

                <div className="testimonial-person">
                  <div className="testimonial-avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <span className="eyebrow">
              <MessageCircle size={14} />
              Frequently asked questions
            </span>

            <h2 className="section-title">
              Have questions before starting?
            </h2>

            <p className="section-text">
              Here are answers to some common questions. If you have something
              specific in mind, contact us and we will be happy to discuss it.
            </p>

            <Link className="btn btn-outline" href="/contact">
              Ask a Question
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.q} open={index === 0}>
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

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="section final-cta-section">
        <div className="container">
          <div className="final-cta">
            <div className="cta-decoration decoration-one" />
            <div className="cta-decoration decoration-two" />

            <span className="eyebrow cta-eyebrow">
              <Sparkles size={14} />
              Let's build something great
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let&apos;s turn it into reality.</span>
            </h2>

            <p>
              Tell us about your business, project or idea. We&apos;ll help
              you choose the right technology and practical next steps.
            </p>

            <div className="cta-actions">
              <Link className="btn btn-white" href="/contact">
                Get a Free Consultation
                <ArrowRight size={17} />
              </Link>

              <a
                className="btn btn-whatsapp"
                href="https://wa.me/919340004380"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>

            <small>No obligation • Clear scope • Practical solutions</small>
          </div>
        </div>
      </section>
    </main>
  );
}

