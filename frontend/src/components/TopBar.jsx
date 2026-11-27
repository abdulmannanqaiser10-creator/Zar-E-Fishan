import { site } from '../data/site';
import './TopBar.css';

const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M6.5 4.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3A2 2 0 0 1 17.5 19 13.5 13.5 0 0 1 4 5.5 2 2 0 0 1 6.5 4.5Z" />
  </svg>
);

const IconFb = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M14 9h2.5V6.2C16.1 5.9 15 5.7 13.8 5.7 11.3 5.7 9.7 7.2 9.7 10v2H7.5v3h2.2V21h3v-6h2.4l.4-3h-2.8V10.3c0-.9.3-1.3 1.3-1.3Z" />
  </svg>
);

const IconIg = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

const TopBar = () => (
  <div className="topbar">
    <div className="container topbar__inner">
      <a href={site.phoneHref} className="topbar__item">
        <IconPhone />
        {site.phone}
      </a>
      <a href={site.facebook} target="_blank" rel="noreferrer" className="topbar__item">
        <IconFb />
        {site.facebookHandle}
      </a>
      <a href={site.instagram} target="_blank" rel="noreferrer" className="topbar__item">
        <IconIg />
        {site.instagramHandle}
      </a>
      <p className="topbar__item topbar__address">
        <IconPin />
        <span>{site.addressOneLine}</span>
      </p>
    </div>
  </div>
);

export default TopBar;
