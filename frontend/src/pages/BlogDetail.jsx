import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { blogs, getBlogById } from '../data/blogs';
import '../styles/blog.css';

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const BlogDetail = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogs.filter((item) => item.id !== blog.id && item.category === blog.category).slice(0, 2);

  return (
    <>
      <SEO title={`${blog.title} | Zar-E-Fishan Interiors`} description={blog.excerpt} />

      <section
        className="page-hero blog-detail-hero"
        style={{ '--hero-image': `url('${blog.image}')` }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              {blog.category}
            </span>
            <h1>{blog.title}</h1>
            <p>
              {formatDate(blog.date)} · {blog.readTime}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container blog-detail-layout">
          <article className="blog-detail-content">
            {blog.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <div className="blog-detail-cta">
              <p>Planning a similar interior upgrade?</p>
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </div>
          </article>

          <aside className="blog-detail-aside">
            <div className="blog-aside-card">
              <h3>Categories</h3>
              <ul>
                {[...new Set(blogs.map((item) => item.category))].map((category) => (
                  <li key={category}>
                    <Link to="/blog">{category}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="blog-aside-card">
                <h3>Related Articles</h3>
                <div className="blog-related">
                  {related.map((item) => (
                    <Link key={item.id} to={`/blog/${item.id}`} className="blog-related__item">
                      <img src={item.image} alt="" loading="lazy" />
                      <div>
                        <strong>{item.title}</strong>
                        <span>{formatDate(item.date)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
