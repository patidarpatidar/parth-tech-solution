import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  BriefcaseBusiness,
  CreditCard,
  Copyright,
  AlertCircle,
  Mail,
} from "lucide-react";
import "../privacy-policy/legal.css";

export const metadata = {
  title: "Terms & Conditions | Parth Tech Solution",
  description:
    "Terms and Conditions governing the use of Parth Tech Solution website and services.",
};

const terms = [
  {
    icon: CheckCircle2,
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using the Parth Tech Solution website or services,
        you agree to comply with these Terms & Conditions. If you do not
        agree with these terms, please do not use our website or services.
      </p>
    ),
  },
  {
    icon: BriefcaseBusiness,
    title: "2. Our Services",
    content: (
      <>
        <p>
          Parth Tech Solution provides digital services that may include
          website development, web applications, e-commerce solutions,
          custom software development, maintenance, and related technology
          services.
        </p>
        <p>
          The exact scope, timeline, deliverables, and pricing of a project
          will be agreed upon separately with the client.
        </p>
      </>
    ),
  },
  {
    icon: FileText,
    title: "3. Project Requirements",
    content: (
      <p>
        Clients are responsible for providing accurate project requirements,
        content, credentials, branding assets, and other information
        reasonably required to complete the agreed work.
      </p>
    ),
  },
  {
    icon: CreditCard,
    title: "4. Payments",
    content: (
      <p>
        Project pricing, payment schedules, advance payments, milestones,
        taxes, and other commercial terms will be communicated and agreed
        upon before or during the project engagement.
      </p>
    ),
  },
  {
    icon: Copyright,
    title: "5. Intellectual Property",
    content: (
      <p>
        Ownership of project-specific source code, designs, content, and
        other deliverables will depend on the terms agreed with the client.
        Third-party libraries, frameworks, fonts, icons, and other assets
        remain subject to their respective licenses.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    title: "6. Limitation of Liability",
    content: (
      <p>
        We make reasonable efforts to provide reliable services. However,
        we are not responsible for losses resulting from circumstances
        outside our reasonable control, including third-party service
        failures, hosting outages, network issues, or unauthorized access.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "7. Contact",
    content: (
      <p>
        If you have questions regarding these Terms & Conditions, please
        contact us through our{" "}
        <Link href="/contact">Contact page</Link>.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <main className="legal-page">
      <section className="legal-hero terms-hero">
        <div className="container">
          <div className="legal-hero-content">
            <span className="legal-badge">
              <FileText size={16} />
              Legal Information
            </span>

            <h1>Terms & Conditions</h1>

            <p>
              These terms explain the rules and conditions for using the
              Parth Tech Solution website and engaging with our services.
            </p>

            <span className="legal-updated">
              Last updated: October 5, 2026
            </span>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-layout">
          <aside className="legal-sidebar">
            <div className="legal-nav-card">
              <span>On this page</span>

              {terms.map((term, index) => (
                <a href={`#terms-${index + 1}`} key={term.title}>
                  {term.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </aside>

          <article className="legal-document">
            <div className="legal-intro">
              <div className="legal-intro-icon">
                <FileText size={24} />
              </div>

              <div>
                <h2>Working together with clarity</h2>
                <p>
                  Clear expectations help us deliver better digital
                  products and services.
                </p>
              </div>
            </div>

            {terms.map((term, index) => {
              const Icon = term.icon;

              return (
                <section
                  className="legal-section"
                  id={`terms-${index + 1}`}
                  key={term.title}
                >
                  <div className="legal-section-title">
                    <div className="legal-section-icon">
                      <Icon size={20} />
                    </div>

                    <h2>{term.title}</h2>
                  </div>

                  <div className="legal-section-body">
                    {term.content}
                  </div>
                </section>
              );
            })}

            <div className="legal-cta">
              <div>
                <span>Ready to work together?</span>
                <h3>Let's discuss your project.</h3>
              </div>

              <Link href="/contact" className="legal-btn">
                Start a Project →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}