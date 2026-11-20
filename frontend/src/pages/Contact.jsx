import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { submitContact } from '../services/api';
import '../styles/contact.css';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const email = import.meta.env.VITE_CONTACT_EMAIL || 'hello@zarefishan.com';
  const phone = import.meta.env.VITE_CONTACT_PHONE || '+92 300 123 4567';

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.subject.trim()) next.subject = 'Subject is required';
    if (!form.message.trim()) next.message = 'Message is required';
    else if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await submitContact(form);
      setStatus({
        type: 'success',
        message: res.message || 'Thank you! Your message has been sent.',
      });
      setForm(initialForm);
    } catch (err) {
      const apiErrors = err.response?.data?.errors;
      if (apiErrors?.length) {
        const mapped = {};
        apiErrors.forEach((item) => {
          mapped[item.field] = item.message;
        });
        setErrors(mapped);
      }
      setStatus({
        type: 'error',
        message:
          err.response?.data?.message ||
          'Unable to send your message right now. Please try again or contact us via WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact | Zar-E-Fishan"
        description="Contact Zar-E-Fishan to begin your interior design project. Reach us by form, email, phone, or WhatsApp."
      />

      <section
        className="page-hero"
        style={{
          '--hero-image':
            "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              Contact
            </span>
            <h1>Let us design your next chapter</h1>
            <p>
              Tell us about your space. We typically respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <motion.form
            className="contact-form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="form-row">
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
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+92 300 000 0000"
                  autoComplete="tel"
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Project inquiry"
                />
                {errors.subject && <span className="field-error">{errors.subject}</span>}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Share your project details, timeline, and vision..."
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            {status.message && (
              <div
                className={`form-status form-status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          <motion.aside
            className="contact-aside"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="info-card">
              <h3>Studio Details</h3>
              <ul className="info-list">
                <li>12 Design Avenue, Gulberg, Lahore</li>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </li>
                <li>Mon – Sat · 10:00 AM – 6:00 PM</li>
              </ul>
              <div style={{ marginTop: '1.25rem' }}>
                <WhatsAppButton />
              </div>
            </div>

            <div className="map-card">
              <iframe
                title="Zar-E-Fishan studio location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.747!2d74.343!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjAnMzQuOCJF!5e0!3m2!1sen!2s!4v1700000000000"
                allowFullScreen
              />
            </div>

            <div>
              <h3 style={{ marginBottom: '0.85rem' }}>Follow Us</h3>
              <div className="social-row">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                  Pinterest
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
