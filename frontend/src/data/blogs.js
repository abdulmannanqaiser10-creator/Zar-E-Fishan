export const blogCategories = [
  'All',
  'Trends',
  'Flooring',
  'Wall Decor',
  'Wallpapers',
  'Home Decor',
];

export const blogs = [
  {
    id: 'modern-interior-design-trends',
    title: 'Modern Interior Trends for 2025',
    category: 'Trends',
    date: '2025-09-18',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'Explore the latest interior trends shaping stylish Pakistani homes — from warm neutrals to textured feature walls.',
    content: [
      'Modern interiors in Pakistan are embracing warmer neutrals, tactile materials and thoughtfully layered lighting.',
      'Feature walls with PVC or WPC panels, soft wallpaper accents and carefully selected flooring create spaces that feel both current and timeless.',
      'At Zar-e-Fishan Interiors, we translate trends into practical choices that suit lifestyle, budget and long-term comfort.',
    ],
  },
  {
    id: 'how-to-choose-the-right-flooring',
    title: 'How to Choose the Right Flooring',
    category: 'Flooring',
    date: '2025-08-30',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1615876234722-c60c4b1e0b7e?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'A clear guide to vinyl, wood and SPC flooring so you can select the right surface for each room.',
    content: [
      'Flooring affects comfort, maintenance and the overall mood of a space. Vinyl offers practical elegance, wood brings warmth, and SPC provides strong stability for busy areas.',
      'Consider moisture exposure, foot traffic and the visual tone of your furniture before making a decision.',
      'Our team helps clients compare options with real samples and installation guidance for lasting results.',
    ],
  },
  {
    id: 'stylish-wall-decor-ideas',
    title: 'Stylish Wall Decor Ideas for Every Home',
    category: 'Wall Decor',
    date: '2025-08-12',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'From PVC wall panels to mouldings and 3D accents — ideas that elevate feature walls with elegance.',
    content: [
      'Walls are one of the fastest ways to transform a room. Panels, mouldings and carefully placed accents can add depth without heavy renovation.',
      'Choose finishes that complement flooring and lighting for a cohesive look.',
      'Zar-e-Fishan Interiors curates wall solutions that feel premium, practical and tailored to your space.',
    ],
  },
  {
    id: 'benefits-of-pvc-wall-panels',
    title: 'Benefits of PVC Wall Panels',
    category: 'Wall Decor',
    date: '2025-07-24',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'Why PVC wall panels are a smart choice for modern feature walls, commercial spaces and quick upgrades.',
    content: [
      'PVC wall panels are lightweight, moisture-resistant and efficient to install — making them ideal for feature walls and commercial interiors.',
      'They offer consistent finishes and a refined look without the timeline of traditional construction methods.',
      'We help clients select profiles and colours that enhance the architecture of each room.',
    ],
  },
  {
    id: 'choosing-the-perfect-wallpaper',
    title: 'Choosing the Perfect Wallpaper',
    category: 'Wallpapers',
    date: '2025-07-06',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'Tips for selecting wallpaper patterns, textures and placements that feel balanced and timeless.',
    content: [
      'Wallpaper works best when scale, colour and texture support the room rather than overpower it.',
      'Soft textures suit bedrooms, while bolder prints can define dining niches and lounge feature walls.',
      'Professional preparation and installation remain essential for clean joints and lasting adhesion.',
    ],
  },
  {
    id: 'modern-home-decoration-ideas',
    title: 'Modern Home Decoration Ideas',
    category: 'Home Decor',
    date: '2025-06-20',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80',
    excerpt:
      'Finishing touches — planters, hangings and decor details — that complete a polished interior.',
    content: [
      'After flooring, walls and ceilings are complete, finishing touches determine whether a space feels unfinished or fully resolved.',
      'Artificial planters, hangings and carefully chosen accents add personality without clutter.',
      'We treat decor as part of the design process, selected to support comfort and visual calm.',
    ],
  },
];

export const getBlogById = (id) => blogs.find((blog) => blog.id === id);
