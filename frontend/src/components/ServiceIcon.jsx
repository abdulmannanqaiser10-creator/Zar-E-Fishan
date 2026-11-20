const icons = {
  home: (
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
  ),
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M8 8h2M8 12h2M8 16h2M17 14h1M17 17h1" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 11V9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2" />
      <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4H3v-4Z" />
      <path d="M5 17v2M19 17v2" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18V9a2 2 0 0 1 2-2h6v5h10v6" />
      <path d="M3 14h18" />
      <path d="M5 18v2M19 18v2" />
    </>
  ),
  kitchen: (
    <>
      <path d="M5 4h14v6H5z" />
      <path d="M5 10v10h14V10" />
      <path d="M9 14h6" />
    </>
  ),
  desk: (
    <>
      <path d="M4 10h16v3H4z" />
      <path d="M6 13v7M18 13v7M10 7h4v3h-4z" />
    </>
  ),
  plan: (
    <>
      <path d="M5 5h14v14H5z" />
      <path d="M5 10h14M10 5v14" />
    </>
  ),
  chair: (
    <>
      <path d="M8 5h8v6H8z" />
      <path d="M6 11h12v3H6z" />
      <path d="M8 14v5M16 14v5" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 12v9M12 12 4 7.5M12 12l8-4.5" />
    </>
  ),
  renovation: (
    <>
      <path d="M14 4 20 10l-9 9H5v-6l9-9Z" />
      <path d="M12 6l6 6" />
    </>
  ),
};

const ServiceIcon = ({ name = 'home' }) => (
  <svg
    className="service-icon"
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {icons[name] || icons.home}
  </svg>
);

export default ServiceIcon;
