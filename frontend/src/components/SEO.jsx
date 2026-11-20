import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Zar-E-Fishan | Premium Interior Design',
  description = 'Zar-E-Fishan crafts timeless residential and commercial interiors with refined aesthetics and meticulous detailing.',
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SEO;
