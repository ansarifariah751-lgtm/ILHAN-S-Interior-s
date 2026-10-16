import { Project } from '../types';

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'travertine-villa-dha',
    title: 'The Travertine Pavilion Villa',
    category: 'villas',
    categoryLabel: 'Luxury Villa Architecture',
    location: 'DHA Phase 6, Lahore',
    area: '2 Kanal Residence',
    year: '2025',
    image: '/src/assets/images/portfolio_arch_facade_1792153019990.jpg',
    summary: 'A bespoke modern residence fusing fluted limestone monoliths, cantilevered rooflines, and serene reflection pools.',
    description: 'Commissioned by a prominent Lahore family, this 2-kanal sanctuary redefines private luxury living. Featuring double-height structural glazing, thermal-efficient fluted stone cladding, concealed perimeter architectural lighting, and an internal courtyarded landscape that cools the private living quarters year-round.',
    materials: ['Imported Beige Travertine', 'Fluted Cast Concrete', 'Low-E Acoustic Glazing', 'Solid Teak Louvers', 'Brushed Bronze Trim'],
    features: ['Double-height structural cantilever', 'Reflective water courtyard', 'Integrated automation & climate control', 'Rooftop private sunset terrace'],
    clientType: 'Private Residential Commission'
  },
  {
    id: 'sanctuary-living-modeltown',
    title: 'Courtyard Light Living Salon',
    category: 'living',
    categoryLabel: 'Bespoke Living Space',
    location: 'Model Town, Lahore',
    area: '1 Kanal Estate',
    year: '2025',
    image: '/src/assets/images/hero_luxury_living_1792153019880.jpg',
    summary: 'Grand double-volume living salon anchored by monolithic Italian travertine walls and panoramic courtyard gardens.',
    description: 'Transforming a conventional floorplate into an airy, light-drenched spatial masterpiece. The salon integrates bespoke low-slung linen modular seating, honed Statuario marble coffee tables, custom brass geometric lighting, and seamless indoor-outdoor transition to a private garden with water features.',
    materials: ['Honed Roman Travertine', 'Cast Terrazzo Flooring with Brass Inlays', 'Bespoke Belgian Linen', 'Hand-knotted Silk-Wool Rugs'],
    features: ['18-foot panoramic sliding glass wall', 'Concealed shadowline acoustic ceilings', 'Custom sculptural brass chandelier', 'Subtle micro-zoned architectural audio'],
    clientType: 'Private Residential Client'
  },
  {
    id: 'serenity-master-gulberg',
    title: 'The Walnut & Bouclé Master Retreat',
    category: 'bedroom',
    categoryLabel: 'Master Bedroom Suite',
    location: 'Gulberg III, Lahore',
    area: '1,200 sq. ft. Private Suite',
    year: '2025',
    image: '/src/assets/images/portfolio_master_suite_1792153019890.jpg',
    summary: 'Warm, tactile master sanctuary clad in architectural walnut acoustic paneling and subtle indirect amber cove illumination.',
    description: 'Designed as an acoustic oasis in the heart of Lahore. The suite combines custom fluted American walnut woodwork, floating bedside cantilever drawers with concealed charging dockings, a curved cream bouclé statement chaise, and tailored sheer drapery framing serene olive garden views.',
    materials: ['American Black Walnut', 'Italian Cream Bouclé Fabric', 'Natural Linen Sheers', 'Honed Calacatta Marble', 'Champagne Brass Accents'],
    features: ['Floating illuminated walnut headboard wall', 'Hidden walk-in dressing wardrobe', 'Circadian cove lighting automation', 'Motorized acoustic linen drapery'],
    clientType: 'Turnkey Suite Renovation'
  },
  {
    id: 'quartzite-culinary-lounge',
    title: 'The Monolith Quartzite Kitchen',
    category: 'kitchen',
    categoryLabel: 'Culinary Lounge & Bar',
    location: 'DHA Phase 5, Lahore',
    area: '850 sq. ft. Open Kitchen',
    year: '2024',
    image: '/src/assets/images/portfolio_minimalist_kitchen_1792153021006.jpg',
    summary: 'Continuous 14-foot waterfall quartzite stone island with seamless graphite cabinetry and fluted warm glass bar storage.',
    description: 'An entertainer’s dream marrying high-performance culinary architecture with refined minimalist aesthetics. Features integrated touch-latch concealed appliance banks, downdraft induction cooktop, fluted warm reeded glass stemware cabinetry with integrated LED stripline, and solid smoked oak bar chairs.',
    materials: ['Taj Mahal Quartzite', 'Anti-Fingerprint Matte Carbon Millwork', 'Fluted Reeded Glass', 'Solid Smoked Oak', 'Brushed Champagne Hardware'],
    features: ['14-foot monolithic waterfall island', 'Concealed butler spice kitchen pass-through', 'Suspended minimalist pendant light sculpture', 'Dual multi-zone wine & beverage preservation'],
    clientType: 'Complete Kitchen Architecture'
  },
  {
    id: 'executive-study-bahria',
    title: 'The Slatted Oak Executive Library',
    category: 'executive',
    categoryLabel: 'Private Executive Study',
    location: 'Bahria Orchard, Lahore',
    area: '650 sq. ft. Private Study',
    year: '2024',
    image: '/src/assets/images/portfolio_executive_office_1792153020892.jpg',
    summary: 'Floor-to-ceiling slatted dark oak bespoke joinery, monolithic Arabescato marble desk, and hand-tufted heritage rug.',
    description: 'A sovereign workspace crafted for focus, high-stakes decisions, and intimate hospitality. Tailored with sound-absorbing ribbed timber ceiling baffles, an integrated library ladder, warm cognac top-grain leather seating, and concealed secret document storage.',
    materials: ['Dark Smoked European Oak', 'Honed Arabescato Marble', 'Cognac Top-grain Leather', 'Cast Iron Track & Brass Rungs'],
    features: ['Rolling custom library ladder', 'Integrated cable-free motorized desk power', 'Museum-grade warm 2700K accent illumination', 'Soundproof double-rebated acoustic entrance'],
    clientType: 'Corporate Chairman Residence'
  }
];

export const MATERIAL_PALETTES = [
  {
    id: 'travertine-warm-taupe',
    name: 'Raw Travertine & Walnut',
    vibe: 'Warm Minimalist Luxury',
    description: 'Natural porous Italian limestone, warm American walnut, hand-spun bouclé, and soft champagne brass accents.',
    swatches: [
      { name: 'Roman Travertine', color: '#e8decb', texture: 'Porous Stone' },
      { name: 'Smoked Walnut', color: '#4a3b32', texture: 'Fluted Wood' },
      { name: 'Oatmeal Bouclé', color: '#f3efe8', texture: 'Tactile Fabric' },
      { name: 'Brushed Brass', color: '#bca167', texture: 'Satin Metal' }
    ]
  },
  {
    id: 'graphite-quartzite',
    name: 'Nero Marquina & Graphite',
    vibe: 'Modern Architectural Precision',
    description: 'Dramatic black veined marble paired with ultra-matte graphite cabinetry, cast concrete, and smoked bronze fixtures.',
    swatches: [
      { name: 'Nero Marquina', color: '#1e1f22', texture: 'High-contrast Marble' },
      { name: 'Matte Graphite', color: '#2d3034', texture: 'Fenix Millwork' },
      { name: 'Honed Concrete', color: '#8e8c87', texture: 'Monolithic Surface' },
      { name: 'Smoked Bronze', color: '#57483b', texture: 'Brushed Alloy' }
    ]
  },
  {
    id: 'japandi-lahore',
    name: 'Lahore Japandi & Lime Plaster',
    vibe: 'Organic Serenity',
    description: 'Textured ivory tadelakt lime plaster, blonde white oak, bleached linen drapery, and blackened iron framing.',
    swatches: [
      { name: 'Tadelakt Ivory', color: '#ede7db', texture: 'Hand-troweled Plaster' },
      { name: 'White Oak', color: '#cbb69d', texture: 'Natural Grain' },
      { name: 'Washed Linen', color: '#ded7c8', texture: 'Airy Textile' },
      { name: 'Blackened Iron', color: '#1a1917', texture: 'Clean Structural Line' }
    ]
  }
];
