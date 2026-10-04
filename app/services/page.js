
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Database,
  Cloud,
  ShoppingCart,
  BarChart3,
  Headphones,
  Zap,
} from "lucide-react";

import { services } from "@/data/site";
import ServiceIcon from "@/components/ServiceIcon";

import "./services.css";

const serviceDetails = {
  website: {
    badge: "01",
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites that help your business establish a strong online presence and generate more opportunities.",
    features: [
      "Business & corporate websites",
      "Landing pages",
      "Portfolio websites",
      "SEO-friendly architecture",
      "Mobile-first responsive UI",
      "Contact & lead forms",
    ],
  },

  webapp: {
    badge: "02",
    title: "Web Application Development",
    description:
      "Custom web applications designed around your business workflow, users and operational requirements.",
    features: [
      "Admin dashboards",
      "Customer portals",
      "CRM & DMS applications",
      "Role-based access control",
      "REST API integration",
      "Real-time functionality",
    ],
  },

  ecommerce: {
    badge: "03",
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with smooth shopping experiences, secure payments and easy product management.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Order management",
      "Payment gateway integration",
      "Customer accounts",
      "Admin product management",
    ],
  },

  software: {
    badge: "04",
    title: "Custom Software",
    description:
      "Business-specific software that replaces manual processes and brings your operations into one reliable platform.",
    features: [
      "Business workflow automation",
      "Custom dashboards",
      "Internal management systems",
      "Reports & analytics",
      "User management",
      "Third-party integrations",
    ],
  },
};

const defaultDetails = {
  badge: "01",
  title: "Custom Digital Solutions",
  description:
    "We build practical digital solutions around your business requirements, users and growth goals.",
  features: [
    "Responsive user experience",
    "Clean maintainable architecture",
    "Secure authentication",
    "API integrations",
    "Deployment support",
    "Post-launch improvements",
  ],
};

const benefits = [
  {
    icon: Sparkles,
    title: "Business First",
    text: "We understand your business requirement before deciding the technology or implementation.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    text: "Your product works smoothly across mobile, tablet, laptop and desktop devices.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Authentication, authorization, validation and secure development practices are considered from the beginning.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    text: "We build applications with clean architecture and performance in mind.",
  },
  {
    icon: Layers3,
    title: "Scalable Architecture",
    text: "The solution can evolve as your users, data and business requirements grow.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    text: "We can help with deployment, maintenance, improvements and future features.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    text: "We understand your business, users, goals, existing systems and pain points.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We define features, user flows, technology, milestones and development priorities.",
  },
  {
    number: "03",
    title: "Design",
    text: "We create a clean and intuitive experience before moving into development.",
  },
  {
    number: "04",
    title: "Development",
    text: "Our developers build the product using maintainable and scalable code.",
  },
  {
    number: "05",
    title: "Testing",
    text: "We test functionality, responsiveness, usability and important edge cases.",
  },
  {
    number: "06",
    title: "Launch",
    text: "We deploy the application and help you move confidently into production.",
  },
];

const technologies = [
  { icon: Code2, name: "Frontend", value: "React.js / Next.js" },
  { icon: Layers3, name: "Backend", value: "Node.js / Express.js" },
  { icon: Database, name: "Database", value: "MongoDB / SQL" },
  { icon: Cloud, name: "Cloud", value: "AWS / Azure" },
  { icon: Smartphone, name: "Mobile", value: "Responsive Web" },
  { icon: BarChart3, name: "APIs", value: "REST / Integrations" },
];

const faqs = [
  {
    question: "What services does Parth Tech Solution provide?",
    answer:
      "We provide website development, web application development, e-commerce solutions, custom software development, API integration, deployment support and ongoing maintenance.",
  },
  {
    question: "Can you build a website according to my business requirements?",
    answer:
      "Yes. We first understand your business, target audience and goals and then create a solution around those requirements rather than forcing you into a fixed template.",
  },
  {
    question: "Can you work on an existing website or application?",
    answer:
      "Yes. We can work with existing applications for UI improvements, bug fixing, new features, API integration, performance improvements and maintenance.",
  },
  {
    question: "Do you provide deployment support?",
    answer:
      "Yes. We can assist with production deployment, domain configuration, hosting, environment variables, APIs and basic cloud setup.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Simply contact us and share your requirements. We will understand the project, discuss the scope and suggest a practical approach.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const getServiceDetails = (service, index) => {
    const id = service[0];

    return (
      serviceDetails[id] || {
        ...defaultDetails,
        badge: String(index + 1).padStart(2, "0"),
        title: service[2],
        description: service[3],
      }
    );
  };

  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <span className="services-glow services-glow-one" />
          <span className="services-glow services-glow-two" />
        </div>

        <div className="container services-hero-inner">
          <div className="services-hero-content">

            <span className="eyebrow services-eyebrow">
              <Sparkles size={15} />
              Our Services
            </span>

            <h1 className="services-title">
              Digital solutions built around{" "}
              <span>your goals.</span>
            </h1>

            <p className="services-subtitle">
              From business websites to custom software platforms, we design
              and develop practical digital products that help businesses
              operate better and grow faster.
            </p>

            <div className="services-hero-actions">
              <Link href="/contact" className="btn btn-gradient">
                Start a Project
                <ArrowRight size={17} />
              </Link>

              <Link href="/portfolio" className="btn btn-light">
                Explore Our Work
              </Link>
            </div>

            <div className="services-trust">
              <span>
                <CheckCircle2 size={16} />
                Modern technology
              </span>

              <span>
                <CheckCircle2 size={16} />
                Responsive design
              </span>

              <span>
                <CheckCircle2 size={16} />
                Scalable solutions
              </span>
            </div>
          </div>

          <div className="services-hero-card">
            <div className="services-floating-card card-one">
              <Globe size={18} />
              <div>
                <strong>Web Solutions</strong>
                <span>Modern & responsive</span>
              </div>
            </div>

            <div className="services-floating-card card-two">
              <Rocket size={18} />
              <div>
                <strong>Ready to Launch</strong>
                <span>From idea to production</span>
              </div>
            </div>

            <div className="services-hero-orbit">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />

              <div className="services-center-icon">
                <Code2 size={42} />
              </div>

              <span className="orbit-dot dot-one" />
              <span className="orbit-dot dot-two" />
              <span className="orbit-dot dot-three" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-list-section">
        <div className="container">

          <div className="section-heading services-section-heading">
            <span className="eyebrow">What We Do</span>

            <h2>
              Everything you need to build
              <span> a better digital presence.</span>
            </h2>

            <p>
              Choose a service today and expand it as your business grows.
              Every solution is designed with usability, performance and
              maintainability in mind.
            </p>
          </div>

          <div className="services-layout">

            {/* SERVICE NAVIGATION */}
            <div className="services-navigation">
              {services.map((service, index) => {
                const [id, icon, title, text] = service;

                return (
                  <button
                    type="button"
                    key={id}
                    className={`service-nav-item ${
                      activeService === index ? "active" : ""
                    }`}
                    onClick={() => setActiveService(index)}
                  >
                    <div className="service-nav-icon">
                      <ServiceIcon name={icon} />
                    </div>

                    <div className="service-nav-content">
                      <span>0{index + 1}</span>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </div>

                    <ArrowRight size={18} />
                  </button>
                );
              })}
            </div>

            {/* SERVICE DETAILS */}
            <div className="service-detail-card">
              {(() => {
                const service = services[activeService];
                const details = getServiceDetails(
                  service,
                  activeService
                );

                return (
                  <>
                    <div className="service-detail-top">
                      <span className="service-number">
                        {details.badge}
                      </span>

                      <span className="service-detail-label">
                        Featured Service
                      </span>
                    </div>

                    <h3>{details.title}</h3>

                    <p>{details.description}</p>

                    <div className="service-feature-grid">
                      {details.features.map((feature) => (
                        <div className="service-feature" key={feature}>
                          <CheckCircle2 size={18} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="service-detail-bottom">
                      <div>
                        <strong>Need this service?</strong>
                        <span>
                          Let's discuss your requirements.
                        </span>
                      </div>

                      <Link href="/contact" className="btn btn-gradient">
                        Discuss Project
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section services-benefits-section">
        <div className="container">

          <div className="section-heading center-heading">
            <span className="eyebrow">Why Choose Us</span>

            <h2>
              More than development.
              <span> A practical technology partner.</span>
            </h2>

            <p>
              We focus on building solutions that are useful for your
              business today and ready for tomorrow.
            </p>
          </div>

          <div className="services-benefits-grid">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className="benefit-card"
                  key={item.title}
                >
                  <div className="benefit-icon">
                    <Icon size={22} />
                  </div>

                  <span className="benefit-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section services-process-section">
        <div className="container">

          <div className="process-header">
            <div>
              <span className="eyebrow">Our Process</span>

              <h2>
                From idea to
                <span> production.</span>
              </h2>
            </div>

            <p>
              A simple and transparent process keeps the project focused,
              predictable and aligned with your business goals.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-card" key={item.number}>

                <div className="process-number">
                  {item.number}
                </div>

                <div className="process-line" />

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section technology-section">
        <div className="container">

          <div className="technology-box">

            <div className="technology-content">
              <span className="eyebrow">
                Technology Stack
              </span>

              <h2>
                Modern technology.
                <span> Reliable products.</span>
              </h2>

              <p>
                We choose technologies according to the project requirements,
                expected scale, performance needs and long-term maintainability.
              </p>

              <Link href="/contact" className="text-link">
                Discuss your technology requirements
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="technology-grid">
              {technologies.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="technology-card"
                    key={item.name}
                  >
                    <Icon size={21} />

                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section services-faq-section">
        <div className="container">

          <div className="faq-layout">

            <div className="faq-intro">
              <span className="eyebrow">FAQ</span>

              <h2>
                Questions?
                <span> We have answers.</span>
              </h2>

              <p>
                Here are some common questions about our services and
                development process.
              </p>

              <Link href="/contact" className="btn btn-primary">
                Ask a Question
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`faq-item ${isOpen ? "open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={20}
                        className="faq-chevron"
                      />
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      

    </main>
  );
}
