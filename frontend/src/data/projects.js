export const projectCategories = ['All', 'Residential', 'Commercial', 'Modern', 'Classic'];

/**
 * Each project uses a unique cover image.
 * Before/after pairs only when distinct assets exist.
 */
export const projects = [
  {
    id: 'executive-office-makeover',
    title: 'Executive Office Makeover',
    category: 'Commercial',
    location: 'Karachi',
    year: '2025',
    description:
      'A compact office transformed with fluted wood wall panels, refined ceiling detailing, and a calm modern workspace finish.',
    image: '/Projects/project1after.png',
    beforeImage: '/Projects/project1before.png',
    afterImage: '/Projects/project1after.png',
    gallery: ['/Projects/project1before.png', '/Projects/project1after.png'],
    tags: ['Commercial', 'Modern'],
  },
  {
    id: 'studio-wall-refresh',
    title: 'Studio Wall Refresh',
    category: 'Commercial',
    location: 'Karachi',
    year: '2025',
    description:
      'A practical workspace upgrade with textured wall panels, cleaner lines, and improved visual depth.',
    image: '/Projects/project2after.png',
    beforeImage: '/Projects/project2before.png',
    afterImage: '/Projects/project2after.png',
    gallery: ['/Projects/project2before.png', '/Projects/project2after.png'],
    tags: ['Commercial', 'Modern'],
  },
  {
    id: 'feature-wall-studio',
    title: 'Feature Wall Studio',
    category: 'Commercial',
    location: 'Karachi',
    year: '2025',
    description:
      'A statement wall treatment with WPC/PVC panels, greenery accents, and polished flooring for a premium showroom feel.',
    image: '/Projects/image.png',
    beforeImage: null,
    afterImage: '/Projects/image.png',
    gallery: ['/Projects/image.png'],
    tags: ['Commercial', 'Classic'],
  },
  {
    id: 'haven-residence',
    title: 'Haven Residence',
    category: 'Residential',
    location: 'DHA Karachi',
    year: '2025',
    description:
      'A serene family home layered with warm woods, soft neutrals and curated lighting.',
    image: '/Projects/project0.png',
    beforeImage: null,
    afterImage: '/Projects/project0.png',
    gallery: ['/Projects/project0.png'],
    tags: ['Residential', 'Modern'],
  },
  {
    id: 'atelier-loft',
    title: 'Atelier Workspace',
    category: 'Commercial',
    location: 'Karachi',
    year: '2025',
    description:
      'An open-plan creative studio balancing structure with refined interior detailing.',
    image: '/Projects/projects.png',
    beforeImage: null,
    afterImage: '/Projects/projects.png',
    gallery: ['/Projects/projects.png'],
    tags: ['Commercial', 'Modern'],
  },
  {
    id: 'olive-suite',
    title: 'Olive Master Suite',
    category: 'Residential',
    location: 'Phase V DHA',
    year: '2025',
    description:
      'A restful bedroom sanctuary with layered textiles and sculptural lighting.',
    image: '/Projects/project3.jpg',
    beforeImage: null,
    afterImage: '/Projects/project3.jpg',
    gallery: ['/Projects/project3.jpg', '/Projects/project4.jpg'],
    tags: ['Residential', 'Classic'],
  },
  {
    id: 'golden-salon',
    title: 'Golden Salon',
    category: 'Residential',
    location: 'Karachi',
    year: '2024',
    description:
      'A living room composition featuring gold accents, textured walls and artful furniture.',
    image: '/Projects/project5.jpg',
    beforeImage: null,
    afterImage: '/Projects/project5.jpg',
    gallery: ['/Projects/project5.jpg', '/Projects/project6.jpg'],
    tags: ['Residential', 'Classic'],
  },
  {
    id: 'executive-haus',
    title: 'Executive Haus',
    category: 'Commercial',
    location: 'Karachi',
    year: '2024',
    description:
      'A boardroom and executive suite designed for presence, clarity and quiet sophistication.',
    image: '/Projects/project7.jpg',
    beforeImage: null,
    afterImage: '/Projects/project7.jpg',
    gallery: ['/Projects/project7.jpg', '/Projects/project8.jpg', '/Projects/project9.jpg'],
    tags: ['Commercial', 'Modern'],
  },
  {
    id: 'culinary-atelier',
    title: 'Culinary Atelier',
    category: 'Modern',
    location: 'Karachi',
    year: '2025',
    description:
      'A chef-inspired kitchen with marble surfaces, custom cabinetry and seamless workflow.',
    image: '/Projects/project10.jpg',
    beforeImage: null,
    afterImage: '/Projects/project10.jpg',
    gallery: ['/Projects/project10.jpg'],
    tags: ['Modern', 'Residential'],
  },
];
