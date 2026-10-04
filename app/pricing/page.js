'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
Check,
ArrowRight,
ArrowUpRight,
Sparkles,
Globe2,
Layers3,
Code2,
Headphones,
ShieldCheck,
Zap,
ChevronDown,
MessageCircle,
Phone,
CircleCheck,
} from 'lucide-react';

import './pricing.css';

const plans = [
{
id: 'starter',
name: 'Starter Website',
label: 'For small businesses',
price: '₹8,000+',
description:
'A professional online presence for individuals, local businesses and small brands.',
icon: Globe2,
popular: false,
features: [
'Up to 5 pages',
'Responsive mobile-first design',
'Contact form + WhatsApp',
'Google Maps integration',
'Basic SEO setup',
'Social media links',
'Basic speed optimization',
'Deployment assistance',
],
},
{
id: 'professional',
name: 'Professional',
label: 'For growing businesses',
price: '₹15,000+',
description:
'A stronger website with custom design, business features and analytics.',
icon: Layers3,
popular: true,
features: [
'Up to 10 pages',
'Custom UI/UX design',
'Gallery / portfolio',
'Advanced enquiry forms',
'Google Analytics',
'SEO foundation',
'Performance optimization',
'WhatsApp integration',
'30 days support',
],
},
{
id: 'custom',
name: 'Custom Platform',
label: 'For complex requirements',
price: "Let's discuss",
description:
'Custom web applications and business platforms designed around your workflow.',
icon: Code2,
popular: false,
features: [
'Custom UX/UI',
'Frontend + backend',
'Database architecture',
'REST APIs',
'Authentication & RBAC',
'Admin dashboard',
'Third-party integrations',
'Cloud deployment',
'Ongoing support',
],
},
];

const comparison = [
['Responsive Design', true, true, true],
['Custom UI Design', false, true, true],
['Contact / Enquiry Form', true, true, true],
['WhatsApp Integration', true, true, true],
['Google Maps', true, true, true],
['SEO Setup', 'Basic', 'Advanced', 'Custom'],
['Analytics', false, true, true],
['Backend / API', false, false, true],
['Database', false, false, true],
['Authentication', false, false, true],
['Admin Dashboard', false, false, true],
['Deployment Support', true, true, true],
['Post-launch Support', 'Basic', '30 Days', 'Ongoing'],
];

const faqs = [
{
q: 'Is the price fixed?',
a: 'The displayed prices are starting prices. Final pricing depends on the number of pages, design complexity, integrations, backend functionality and project timeline.',
},
{
q: 'Can I request features that are not listed?',
a: 'Yes. The packages are starting points, not limitations. We can add features such as payment gateways, dashboards, APIs, authentication, booking systems, CRM modules and third-party integrations.',
},
{
q: 'Do you provide hosting and domain?',
a: 'Yes. We can help you choose and configure your domain, hosting, SSL and deployment. Domain and hosting charges are normally separate from development charges.',
},
{
q: 'Do you provide website maintenance?',
a: 'Yes. Maintenance and support can be provided after launch for content updates, bug fixes, technical improvements, monitoring and new features.',
},
{
q: 'How do I get an exact quotation?',
a: 'Send your requirements through the contact form or WhatsApp. After understanding the project scope, we can provide a suitable quotation and development plan.',
},
];

const process = [
{
number: '01',
title: 'Discuss',
text: 'Understand your business, users, requirements and goals.',
},
{
number: '02',
title: 'Estimate',
text: 'Define scope, features, timeline and the most suitable package.',
},
{
number: '03',
title: 'Build',
text: 'Design, develop and test the solution with regular updates.',
},
{
number: '04',
title: 'Launch',
text: 'Deploy your project and provide post-launch support.',
},
];

export default function Pricing() {
const [openFaq, setOpenFaq] = useState(0);
const [billing, setBilling] = useState('project');

return ( <main className="pricing-page">


  {/* HERO */}
  <section className="pricing-hero">
    <div className="pricing-orb pricing-orb-one" />
    <div className="pricing-orb pricing-orb-two" />

    <div className="container">
      <div className="pricing-hero-content">

        <span className="eyebrow pricing-eyebrow">
          <Sparkles size={14} />
          Simple & transparent pricing
        </span>

        <h1 className="title">
          Choose a starting point.
          <span> Build what you need.</span>
        </h1>

        <p className="subtitle">
          Flexible packages for websites, web applications
          and custom digital products. Start small and scale
          when your business needs more.
        </p>

        <div className="pricing-hero-actions">
          <Link
            href="/contact"
            className="pricing-primary-btn"
          >
            Get a custom quote
            <ArrowRight size={17} />
          </Link>

          <a
            href="https://wa.me/919340004380"
            target="_blank"
            rel="noreferrer"
            className="pricing-secondary-btn"
          >
            <MessageCircle size={17} />
            WhatsApp us
          </a>
        </div>

        <div className="pricing-trust">
          <span>
            <CircleCheck size={15} />
            No hidden development charges
          </span>

          <span>
            <CircleCheck size={15} />
            Clear project scope
          </span>

          <span>
            <CircleCheck size={15} />
            Flexible custom plans
          </span>
        </div>

      </div>
    </div>
  </section>

  {/* PRICING CARDS */}
  <section className="section pricing-plans-section">
    <div className="container">

      <div className="pricing-section-heading">
        <span className="eyebrow">Packages</span>

        <h2>
          Start with the plan that fits your stage.
        </h2>

        <p>
          Every project is different. These packages give
          you a clear starting point.
        </p>
      </div>

      <div className="pricing-toggle">
        <button
          className={billing === 'project' ? 'active' : ''}
          onClick={() => setBilling('project')}
        >
          Project pricing
        </button>

        <button
          className={billing === 'support' ? 'active' : ''}
          onClick={() => setBilling('support')}
        >
          Support & maintenance
        </button>
      </div>

      {billing === 'project' ? (
        <div className="pricing-grid">

          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                className={`pricing-card ${
                  plan.popular ? 'pricing-card-popular' : ''
                }`}
                key={plan.id}
              >

                {plan.popular && (
                  <div className="popular-ribbon">
                    <Sparkles size={13} />
                    Most Popular
                  </div>
                )}

                <div className="pricing-card-top">

                  <div className="pricing-icon">
                    <Icon size={21} />
                  </div>

                  <span className="pricing-label">
                    {plan.label}
                  </span>

                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                </div>

                <div className="pricing-price">
                  {plan.price}
                </div>

                <div className="pricing-price-note">
                  Starting price · Final quote depends on scope
                </div>

                <div className="pricing-divider" />

                <div className="pricing-features">

                  <strong>
                    What's included
                  </strong>

                  {plan.features.map((feature) => (
                    <div
                      className="pricing-feature"
                      key={feature}
                    >
                      <span>
                        <Check size={14} />
                      </span>

                      {feature}
                    </div>
                  ))}

                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(
                    plan.name
                  )}`}
                  className={`pricing-card-btn ${
                    plan.popular
                      ? 'pricing-card-btn-primary'
                      : ''
                  }`}
                >
                  Discuss this package
                  <ArrowUpRight size={16} />
                </Link>

              </article>
            );
          })}

        </div>
      ) : (
        <div className="support-panel">

          <div className="support-panel-icon">
            <Headphones size={25} />
          </div>

          <div>
            <span>Post-launch support</span>
            <h3>
              Keep your website or application running smoothly.
            </h3>

            <p>
              Maintenance plans can include content updates,
              bug fixes, monitoring, backups, performance
              improvements and new functionality.
            </p>
          </div>

          <Link
            href="/contact"
            className="pricing-primary-btn"
          >
            Ask about support
            <ArrowRight size={16} />
          </Link>

        </div>
      )}

    </div>
  </section>

  {/* VALUE STRIP */}
  <section className="pricing-value-section">
    <div className="container">

      <div className="pricing-value-grid">

        <div>
          <Zap size={22} />
          <strong>Performance focused</strong>
          <span>
            Fast, responsive and optimized experiences.
          </span>
        </div>

        <div>
          <ShieldCheck size={22} />
          <strong>Built with care</strong>
          <span>
            Clean structure and maintainable development.
          </span>
        </div>

        <div>
          <Code2 size={22} />
          <strong>Modern technology</strong>
          <span>
            Scalable technologies selected for your project.
          </span>
        </div>

        <div>
          <Headphones size={22} />
          <strong>After-launch support</strong>
          <span>
            Help doesn't stop when your website goes live.
          </span>
        </div>

      </div>

    </div>
  </section>

  {/* COMPARISON */}
  <section className="section comparison-section">
    <div className="container">

      <div className="pricing-section-heading centered">
        <span className="eyebrow">Compare</span>

        <h2>
          See what's included in each package.
        </h2>

        <p>
          Need something between two packages?
          We can create a custom scope.
        </p>
      </div>

      <div className="comparison-wrapper">

        <div className="comparison-table">

          <div className="comparison-row comparison-header">
            <div>Feature</div>
            <div>Starter</div>
            <div>Professional</div>
            <div>Custom</div>
          </div>

          {comparison.map(([feature, starter, professional, custom]) => (
            <div
              className="comparison-row"
              key={feature}
            >
              <div>{feature}</div>

              <div>
                {typeof starter === 'boolean' ? (
                  starter ? (
                    <Check className="comparison-check" />
                  ) : (
                    <span className="comparison-no">—</span>
                  )
                ) : (
                  starter
                )}
              </div>

              <div>
                {typeof professional === 'boolean' ? (
                  professional ? (
                    <Check className="comparison-check" />
                  ) : (
                    <span className="comparison-no">—</span>
                  )
                ) : (
                  professional
                )}
              </div>

              <div>
                {typeof custom === 'boolean' ? (
                  custom ? (
                    <Check className="comparison-check" />
                  ) : (
                    <span className="comparison-no">—</span>
                  )
                ) : (
                  custom
                )}
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  </section>

  {/* PROCESS */}
  <section className="section pricing-process-section">
    <div className="container">

      <div className="pricing-section-heading">
        <span className="eyebrow">How it works</span>

        <h2>
          From idea to launch without the confusion.
        </h2>

        <p>
          A straightforward process keeps your project
          predictable and easy to follow.
        </p>
      </div>

      <div className="pricing-process-grid">

        {process.map((item) => (
          <div
            className="pricing-process-card"
            key={item.number}
          >
            <span>{item.number}</span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  </section>

  {/* FAQ */}
  <section className="section pricing-faq-section">
    <div className="container pricing-faq-grid">

      <div className="pricing-faq-intro">
        <span className="eyebrow">
          Frequently asked questions
        </span>

        <h2>
          Have questions before starting?
        </h2>

        <p>
          Here are answers to some common questions about
          pricing, scope and support.
        </p>

        <div className="faq-contact-box">
          <MessageCircle size={19} />

          <div>
            <strong>Still have a question?</strong>

            <span>
              Talk to us directly.
            </span>

            <a href="tel:+919340004380">
              <Phone size={14} />
              +91 93400 04380
            </a>
          </div>
        </div>
      </div>

      <div className="pricing-faq-list">

        {faqs.map((faq, index) => {
          const open = openFaq === index;

          return (
            <div
              className={`pricing-faq ${
                open ? 'faq-open' : ''
              }`}
              key={faq.q}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(open ? -1 : index)
                }
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="faq-chevron"
                />
              </button>

              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  </section>

 

</main>

);
}
