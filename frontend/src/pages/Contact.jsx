import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { site } from '../data/site';
import '../styles/contact.css';

const initialForm = {
  name: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.phone.trim()) next.phone = 'Phone is required';
    else if (!/^[\d\s+\-()]{7,20}$/.test(form.phone.trim())) {
      next.phone = 'Enter a valid phone number';
    }
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10) {
      next.message = 'Message must be at least 10 characters';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (!validate()) return;

    const text = [
      'Hello Zar-e-Fishan Interiors,',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      '',
      'Message:',
      form.message.trim(),
    ].join('\n');

    const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(href, '_blank', 'noopener,noreferrer');

    setStatus({
      type: 'success',
      message: 'Opening WhatsApp with your message…',
    });
    setForm(initialForm);
  };

  return (
    <>
      <SEO
        title="Contact Us | ZAR-E-FISHAN INTERIORS"
        description="Let's create something beautiful. Contact Zar-e-Fishan Interiors in DHA Phase V, Karachi."
      />

      <section
        className="contact-page"
        style={{
          '--contact-image':
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="container contact-page__grid">
          <motion.div
            className="contact-page__info"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-label">Contact</p>
            <h1>
              Let&apos;s Create <em>Something Beautiful</em>
            </h1>
            <p className="contact-page__lead">
              Tell us about your space and vision. We&apos;ll help you shape a refined,
              practical plan with premium materials and careful execution.
            </p>

            <ul className="contact-page__details">
              <li>
                <span className="contact-page__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3A2 2 0 0 1 17.5 19 13.5 13.5 0 0 1 4 5.5 2 2 0 0 1 6.5 4.5Z" />
                  </svg>
                </span>
                <div>
                  <strong>Phone</strong>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-page__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-page__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
                    <circle cx="12" cy="11" r="2.2" />
                  </svg>
                </span>
                <div>
                  <strong>Location</strong>
                  <span>
                    {site.addressLines.map((line) => (
                      <span key={line} className="address-line">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            className="contact-card"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <h2>Send a Message</h2>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
                autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="03XX-XXXXXXX"
                autoComplete="tel"
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your space and vision..."
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            {status.message && (
              <div className={`form-status form-status--${status.type}`} role="status">
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary contact-card__submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
