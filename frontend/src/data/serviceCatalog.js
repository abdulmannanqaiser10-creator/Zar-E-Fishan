/** Full product catalogue for the Services page */
export const serviceCatalog = [
  {
    id: 'wall-decor',
    title: 'Wall Decor',
    description:
      'Feature walls and decorative finishes that add depth, texture and lasting elegance.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    products: [
      'PVC Wall Panels',
      'WPC Wall Panels',
      'UV Marble Sheets',
      'PS Wall Panels',
      'Wallpapers',
      'Self-Adhesive Foamic Stickers',
      'French Wall Mouldings',
      'PU Flowers',
      'PU Cornice / Borders',
      '3D Wall Panels',
      '3D PU Wall Panels',
    ],
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description:
      'Durable and refined flooring options for homes, offices and specialised spaces.',
    image:
      'https://images.unsplash.com/photo-1615876234722-c60c4b1e0b7e?auto=format&fit=crop&w=1200&q=80',
    products: [
      'PVC Vinyl Tile Flooring',
      'Laminate Wooden Flooring',
      'SPC Flooring',
      'WPC Outdoor Deck Flooring',
      'Anti-Skid Flooring',
      'Hygienic Homogeneous Vinyl Flooring',
      'Gym Flooring',
      'Sports Flooring',
      'Carpet Tiles',
      'Ceramic Tiles Flooring',
      'Marble Flooring',
    ],
  },
  {
    id: 'window-blinds',
    title: 'Window Blinds',
    description:
      'Light control and privacy solutions with premium blind styles for every room.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    products: [
      'Roller Blinds',
      'Roller Blinds with Pelmet Cover',
      'Verman / Shangrilla Blinds',
      'Zebra Blinds',
      'Bamboo Chic Blinds',
      'Wooden Blinds',
      'Customised Picture Blinds',
    ],
  },
  {
    id: 'wood-works',
    title: 'Wood Works',
    description:
      'Custom and ready furniture pieces crafted for comfort, storage and everyday living.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    products: [
      'Office Chairs',
      'Office Tables',
      'Coffee Tables',
      'Dining Tables with Chairs',
      'Side Tables',
      'Beds',
      'Wardrobes',
      'Dressing Tables',
      'Kitchen Cabinets',
      'Shelves',
      'Counters',
    ],
  },
  {
    id: 'false-ceiling',
    title: 'False Ceiling',
    description:
      'Ceiling systems that elevate lighting, acoustics and architectural finish.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    products: [
      "2'x2' Tile Ceiling",
      'POP Ceiling',
      'PVC Ceiling',
      'Gypsum Board Ceiling',
    ],
  },
  {
    id: 'pvc-folding-door',
    title: 'PVC Folding Door',
    description:
      'Space-saving PVC folding doors designed for practical partitioning and durability.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    products: ['PVC Folding Doors'],
  },
  {
    id: 'home-decor',
    title: 'Home Decor',
    description:
      'Finishing accents that complete a polished, welcoming interior.',
    image:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    products: [
      'Artificial Flower Pots',
      'Artificial Planters',
      'Artificial Grass',
      'Hangings',
    ],
  },
];

/** Keep older named exports for Contact / Home imports */
export const showcaseServices = serviceCatalog.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  image: category.image,
}));

export const services = showcaseServices;

export const serviceCategories = serviceCatalog.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  image: category.image,
  items: category.products.map((title, index) => ({
    id: `${category.id}-${index}`,
    title,
  })),
}));
