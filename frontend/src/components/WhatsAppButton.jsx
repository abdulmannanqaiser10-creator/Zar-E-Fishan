import { site } from '../data/site';
import './WhatsAppButton.css';

const WhatsAppButton = ({
  label = 'Chat on WhatsApp',
  className = '',
  floating = false,
}) => {
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    'Hello Zar-e-Fishan Interiors, I would like to discuss an interior project.'
  )}`;

  return (
    <a
      href={href}
      className={`whatsapp-btn ${floating ? 'whatsapp-btn--float' : ''} ${className}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12 2Zm0 18a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20Zm4.5-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 2.3.9 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
      </svg>
      {!floating && <span>{label}</span>}
    </a>
  );
};

export default WhatsAppButton;
