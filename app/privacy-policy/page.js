import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Mail,
  Cookie,
  UserCheck,
} from "lucide-react";
import "./legal.css";

export const metadata = {
  title: "Privacy Policy | Parth Tech Solution",
  description:
    "Privacy Policy for Parth Tech Solution explaining how we collect, use and protect information.",
};

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you contact us, request a service, or interact with our
          website, we may collect information such as your name, email
          address, phone number, company name, and project requirements.
        </p>
        <p>
          We may also collect basic technical information such as browser
          type, device information, IP address, and website usage data.
        </p>
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We may use collected information to:</p>
        <ul>
          <li>Respond to your enquiries and requests.</li>
          <li>Provide and improve our services.</li>
          <li>Prepare project proposals and estimates.</li>
          <li>Communicate with you regarding your project.</li>
          <li>Improve website performance and user experience.</li>
          <li>Prevent fraud, abuse, and security issues.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: "3. Data Protection",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no internet-based system can be guaranteed to
        be completely secure.
      </p>
    ),
  },
  {
    icon: Cookie,
    title: "4. Cookies",
    content: (
      <p>
        Our website may use cookies or similar technologies to improve
        functionality, understand website usage, and provide a better user
        experience. You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    icon: ShieldCheck,
    title: "5. Third-Party Services",
    content: (
      <p>
        We may use trusted third-party services for hosting, analytics,
        communication, payment processing, or other business operations.
        These services may process information according to their own
        privacy policies.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "6. Contact Us",
    content: (
      <p>
        If you have questions about this Privacy Policy or how your
        information is handled, please contact us through our{" "}
        <Link href="/contact">Contact page</Link>.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero-content">
            <span className="legal-badge">
              <ShieldCheck size={16} />
              Privacy & Security
            </span>

            <h1>Privacy Policy</h1>

            <p>
              Your privacy matters to us. This policy explains how Parth Tech
              Solution collects, uses, and protects information when you use
              our website and services.
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

              {sections.map((section, index) => (
                <a href={`#privacy-${index + 1}`} key={section.title}>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </div>
          </aside>

          <article className="legal-document">
            <div className="legal-intro">
              <div className="legal-intro-icon">
                <Lock size={24} />
              </div>

              <div>
                <h2>Your privacy is important</h2>
                <p>
                  We aim to be transparent about the information we collect
                  and how we use it.
                </p>
              </div>
            </div>

            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <section
                  className="legal-section"
                  id={`privacy-${index + 1}`}
                  key={section.title}
                >
                  <div className="legal-section-title">
                    <div className="legal-section-icon">
                      <Icon size={20} />
                    </div>

                    <h2>{section.title}</h2>
                  </div>

                  <div className="legal-section-body">
                    {section.content}
                  </div>
                </section>
              );
            })}

            <div className="legal-cta">
              <div>
                <span>Have a question?</span>
                <h3>We're happy to help.</h3>
              </div>

              <Link href="/contact" className="legal-btn">
                Contact Us →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}