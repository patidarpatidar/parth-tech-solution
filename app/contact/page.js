'use client';

import { useState } from 'react';
import {
Mail,
Phone,
MapPin,
Send,
Clock3,
MessageCircle,
CheckCircle2,
ArrowUpRight,
Loader2,
Building2,
Globe2,
Sparkles,
} from 'lucide-react';

import './contact.css';

const services = [
'Business Website',
'Web Application',
'E-Commerce',
'Custom Software',
'API Development',
'Website Maintenance',
'Other',
];

const budgets = [
'₹10,000 – ₹25,000',
'₹25,000 – ₹50,000',
'₹50,000 – ₹1,00,000',
'₹1,00,000+',
'Not sure yet',
];

export default function Contact() {
const [status, setStatus] = useState({
type: '',
message: '',
});

const [loading, setLoading] = useState(false);

async function handleSubmit(event) {
event.preventDefault();


setLoading(true);
setStatus({
  type: '',
  message: '',
});

const form = event.currentTarget;
const formData = new FormData(form);

const data = {
  name: formData.get('name'),
  email: formData.get('email'),
  phone: formData.get('phone'),
  service: formData.get('service'),
  budget: formData.get('budget'),
  message: formData.get('message'),
  website: formData.get('website'),
};

try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || 'Something went wrong.'
    );
  }

  setStatus({
    type: 'success',
    message:
      result.message ||
      'Your enquiry has been sent successfully.',
  });

  form.reset();
} catch (error) {
  setStatus({
    type: 'error',
    message:
      error.message ||
      'Unable to send your enquiry. Please try again.',
  });
} finally {
  setLoading(false);
}


}

return ( <main className="contact-page">


  {/* HERO */}
  <section className="contact-hero">
    <div className="contact-hero-glow contact-glow-one" />
    <div className="contact-hero-glow contact-glow-two" />

    <div className="container">
      <div className="contact-hero-content">

        <span className="eyebrow contact-eyebrow">
          <Sparkles size={14} />
          Let's build something useful
        </span>

        <h1 className="title">
          Tell us what you want to{' '}
          <span>build.</span>
        </h1>

        <p className="subtitle">
          Have an idea, business requirement or existing
          website that needs improvement? Share the details
          and we'll help you choose the right solution.
        </p>

        <div className="contact-hero-points">
          <span>
            <CheckCircle2 size={16} />
            Quick response
          </span>

          <span>
            <CheckCircle2 size={16} />
            Practical solutions
          </span>

          <span>
            <CheckCircle2 size={16} />
            No-obligation discussion
          </span>
        </div>

      </div>
    </div>
  </section>

  {/* MAIN CONTACT */}
  <section className="section contact-main">
    <div className="container contact-grid">

      {/* LEFT SIDE */}
      <aside className="contact-sidebar">

        <div className="contact-info-card">

          <div className="contact-card-header">
            <span className="contact-icon-large">
              <MessageCircle size={22} />
            </span>

            <div>
              <span className="contact-small-label">
                Start a conversation
              </span>

              <h2>Let's talk</h2>
            </div>
          </div>

          <p className="contact-description">
            Tell us about your business, project,
            required features and expected timeline.
            We'll get back to you with the next practical
            step.
          </p>

          <div className="contact-info-list">

            <a
              href="mailto:rajmalpatidar2248@gmail.com"
              className="contact-info-item"
            >
              <span className="contact-info-icon">
                <Mail size={18} />
              </span>

              <span>
                <small>Email</small>
                <strong>
                  rajmalpatidar2248@gmail.com
                </strong>
              </span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="tel:+919340004380"
              className="contact-info-item"
            >
              <span className="contact-info-icon">
                <Phone size={18} />
              </span>

              <span>
                <small>Phone</small>
                <strong>+91 93400 04380</strong>
              </span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://wa.me/919340004380"
              target="_blank"
              rel="noreferrer"
              className="contact-info-item"
            >
              <span className="contact-info-icon whatsapp-icon">
                <MessageCircle size={18} />
              </span>

              <span>
                <small>WhatsApp</small>
                <strong>Chat with us</strong>
              </span>

              <ArrowUpRight size={16} />
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={18} />
              </span>

              <span>
                <small>Location</small>
                <strong>
                  Neemuch, Madhya Pradesh, India
                </strong>
              </span>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <Clock3 size={18} />
              </span>

              <span>
                <small>Working hours</small>
                <strong>
                  Mon – Sat · 10:00 AM – 7:00 PM
                </strong>
              </span>
            </div>

          </div>

        </div>

        {/* Why contact */}
        <div className="contact-mini-grid">

          <div className="contact-mini-card">
            <Building2 size={20} />
            <strong>Business-first</strong>
            <span>
              Solutions focused on real business needs.
            </span>
          </div>

          <div className="contact-mini-card">
            <Globe2 size={20} />
            <strong>Remote friendly</strong>
            <span>
              Work with clients across India.
            </span>
          </div>

        </div>

      </aside>

      {/* FORM */}
      <div className="contact-form-card">

        <div className="form-heading">
          <span className="form-badge">
            Project enquiry
          </span>

          <h2>Let's discuss your project</h2>

          <p>
            Fill in the details below. Your enquiry will
            be sent directly to our team.
          </p>
        </div>

        {status.message && (
          <div
            className={`contact-alert ${
              status.type === 'success'
                ? 'alert-success'
                : 'alert-error'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle2 size={20} />
            ) : (
              <Mail size={20} />
            )}

            <span>{status.message}</span>
          </div>
        )}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {/* Honeypot */}
          <input
            type="text"
            name="website"
            className="honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="form-row">

            <div className="field">
              <label htmlFor="name">
                Full Name <span>*</span>
              </label>

              <input
                id="name"
                name="name"
                required
                minLength={2}
                placeholder="Enter your name"
              />
            </div>

            <div className="field">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>

          </div>

          <div className="form-row">

            <div className="field">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className="field">
              <label htmlFor="service">
                What do you need? <span>*</span>
              </label>

              <select
                id="service"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="field">
            <label htmlFor="budget">
              Estimated Budget
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
            >
              <option value="" disabled>
                Select your budget
              </option>

              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">
              Project Details <span>*</span>
            </label>

            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={7}
              placeholder="Tell us about your business, project requirements, features, timeline, existing website/app, etc."
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="spin"
                />
                Sending enquiry...
              </>
            ) : (
              <>
                Send enquiry
                <Send size={17} />
              </>
            )}
          </button>

          <p className="form-note">
            By submitting this form, you agree that we may
            contact you regarding your enquiry.
          </p>

        </form>

      </div>

    </div>
  </section>

  {/* MAP */}
  <section className="section contact-location-section">
    <div className="container">

      <div className="location-heading">
        <div>
          <span className="eyebrow">
            <MapPin size={14} />
            Find us
          </span>

          <h2>Based in Neemuch, Madhya Pradesh</h2>

          <p>
            Serving businesses locally and working with
            clients across India.
          </p>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Neemuch%2C%20Madhya%20Pradesh%2C%20India"
          target="_blank"
          rel="noreferrer"
          className="map-button"
        >
          Open in Google Maps
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="map-wrapper">

        <iframe
          title="Parth Tech Solution - Neemuch, Madhya Pradesh"
          src="https://www.google.com/maps?q=Neemuch%2C%20Madhya%20Pradesh%2C%20India&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="map-overlay-card">
          <span>
            <MapPin size={17} />
          </span>

          <div>
            <strong>Neemuch</strong>
            <small>
              Madhya Pradesh, India
            </small>
          </div>
        </div>

      </div>

    </div>
  </section>

 

</main>

);
}
