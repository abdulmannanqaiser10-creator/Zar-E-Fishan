import './WhatsAppButton.css';

const WhatsAppButton = ({ label = 'Chat on WhatsApp', className = '' }) => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '923001234567';
  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    'Hello Zar-E-Fishan, I would like to discuss an interior design project.'
  )}`;

  return (
    <a
      href={href}
      className={`whatsapp-btn ${className}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 1 0 20.5 3.5Zm-8.6 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.6.7-3.3-.2-.3a9.1 9.1 0 1 1 7.8 4.5Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.4c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.2 3a12.4 12.4 0 0 0 4.6 4.1c.6.3 1.2.5 1.6.6s1.2.2 1.6.1a2.7 2.7 0 0 0 1.8-1.2c.2-.4.2-.7.1-.8s-.2-.2-.5-.3Z" />
      </svg>
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppButton;
