
"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Twitter,
  Send,
  Clock3,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import "./Footer.css";

const companyLinks = [
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  ["Business Websites", "/services#websites"],
  ["Web Applications", "/services#apps"],
  ["E-Commerce", "/services#ecommerce"],
  ["Custom Software", "/services#software"],
  ["API Development", "/services#api"],
  ["Maintenance & Support", "/services#support"],
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: Facebook,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        className="footer-whatsapp"
        href="https://wa.me/919340004380"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Parth Tech Solution on WhatsApp"
      >
        <MessageCircle size={24} />

        <span className="footer-whatsapp-text">
          <strong>Let's Talk</strong>
          <small>WhatsApp</small>
        </span>

        <span className="footer-whatsapp-pulse" />
      </a>

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}

      <section className="footer-cta-section">
        <div className="container">

          <div className="footer-cta">

            <div className="footer-cta-glow glow-one" />
            <div className="footer-cta-glow glow-two" />

            <div className="footer-cta-content">

              <span className="footer-eyebrow">
                <Sparkles size={14} />
                Have a project in mind?
              </span>

              <h2>
                Let's build something
                <span> meaningful.</span>
              </h2>

              <p>
                Tell us about your idea, business or workflow. We’ll help
                you find the right digital solution and turn it into a
                practical product.
              </p>

            </div>

            <Link href="/contact" className="footer-cta-button">
              Start a Project
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container">

          <div className="footer-main">

            {/* BRAND */}

            <div className="footer-brand">

              <Link href="/" className="footer-logo">
                Parth <span>Tech</span>
                <small>Solution</small>
              </Link>

              <p className="footer-description">
                Modern websites, web applications and custom digital products
                designed to help growing businesses work smarter and grow
                online.
              </p>

              <div className="footer-status">
                <span className="status-dot" />
                Available for new projects
              </div>

              {/* SOCIAL */}

              <div className="footer-social">

                <span>Follow us</span>

                <div className="footer-social-list">

                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.name}
                        className="footer-social-icon"
                      >
                        <Icon size={17} />

                        <span>{social.name}</span>

                      </a>
                    );
                  })}

                </div>

              </div>

            </div>

            {/* COMPANY */}

            <div className="footer-column">

              <h3>Company</h3>

              <div className="footer-links">

                {companyLinks.map(([label, href]) => (
                  <Link href={href} key={label}>
                    <span>{label}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                ))}

              </div>

            </div>

            {/* SERVICES */}

            <div className="footer-column">

              <h3>Services</h3>

              <div className="footer-links">

                {serviceLinks.map(([label, href]) => (
                  <Link href={href} key={label}>
                    <span>{label}</span>
                    <ArrowUpRight size={13} />
                  </Link>
                ))}

              </div>

            </div>

            {/* CONTACT */}

            <div className="footer-column footer-contact">

              <h3>Get in touch</h3>

              <a
                href="mailto:rajmalpatidar2248@gmail.com"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={17} />
                </span>

                <span>
                  <small>Email</small>
                  rajmalpatidar2248@gmail.com
                </span>
              </a>

              <a
                href="tel:+919340004380"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Phone size={17} />
                </span>

                <span>
                  <small>Phone</small>
                  +91 93400 04380
                </span>
              </a>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <MapPin size={17} />
                </span>

                <span>
                  <small>Location</small>
                  Neemuch, Madhya Pradesh, India
                </span>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Clock3 size={17} />
                </span>

                <span>
                  <small>Working Hours</small>
                  Mon – Sat · 10 AM – 7 PM
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              NEWSLETTER / CONTACT BAR
          ================================================= */}

          <div className="footer-newsletter">

            <div className="footer-newsletter-content">

              <div className="newsletter-icon">
                <Send size={18} />
              </div>

              <div>
                <h3>Stay connected</h3>
                <p>
                  Get useful digital tips, product ideas and updates.
                </p>
              </div>

            </div>

            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />

              <button type="submit">
                Subscribe
                <ArrowRight size={15} />
              </button>
            </form>

          </div>

          {/* =================================================
              BOTTOM
          ================================================= */}

          <div className="footer-bottom">

            <div className="footer-copyright">
              © {currentYear}{" "}
              <strong>Parth Tech Solution</strong>.
              All rights reserved.
            </div>

            <div className="footer-bottom-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
  <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <button
              type="button"
              className="footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUpRight size={17} />
            </button>

          </div>

        </div>

      </footer>
    </>
  );
}
