import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { blogs } from '../data/blogs';
import '../styles/blog.css';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const featured = blogs.slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <SEO
        title="Our Blog | ZAR-E-FISHAN INTERIORS"
        description="Design insights and ideas from Zar-e-Fishan Interiors."
      />

      <section className="section blog-page">
        <div className="container">
          <motion.div
            className="section-head section-head--center blog-page__head"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-label">Journal</p>
            <h1 className="blog-page__title">
              Design Insights <em>& Ideas</em>
            </h1>
          </motion.div>

          <div className="blog-grid">
            {featured.map((blog, i) => (
              <motion.article
                key={blog.id}
                className="blog-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={`/blog/${blog.id}`} className="blog-card__media">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </Link>
                <div className="blog-card__body">
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                  <h2>
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <Link to={`/blog/${blog.id}`} className="blog-card__link">
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-band">
        <div className="container newsletter-band__inner">
          <div>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Design tips, project stories and seasonal inspiration — delivered thoughtfully.</p>
          </div>
          {subscribed ? (
            <p className="newsletter-band__success" role="status">
              Thank you for subscribing.
            </p>
          ) : (
            <form className="newsletter-band__form" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
