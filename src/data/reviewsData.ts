import { ReviewItem } from '../types';

export const GOOGLE_REVIEWS_SUMMARY = {
  averageRating: 4.6,
  totalReviews: 31,
  ratingDistribution: [
    { stars: 5, percentage: 78, count: 24 },
    { stars: 4, percentage: 14, count: 4 },
    { stars: 3, percentage: 5, count: 2 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 3, count: 1 },
  ],
  filterTags: [
    { id: 'all', label: 'All Reviews', count: 31 },
    { id: 'unique living space', label: 'unique living space', count: 2 },
    { id: 'architecture', label: 'architecture', count: 5 },
    { id: 'modern design', label: 'modern design', count: 2 },
    { id: 'inviting spaces', label: 'inviting spaces', count: 2 },
  ]
};

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'rev-seo-subhani',
    author: 'SEO Subhani',
    rating: 5,
    timeAgo: 'Edited 2 years ago',
    text: "ILHAN'S Interiors in Lahore is a standout choice for anyone seeking top-tier interior design and architectural services. Their team's professionalism, creativity, and attention to detail are truly commendable. The personalized approach they bring made our project execution completely seamless and elevated our residential space beyond expectations.",
    ownerReply: 'Thank you for your valuable feedback! Please continue to visit our website for the latest updates.',
    tags: ['architecture', 'unique living space'],
    verified: true,
    avatarLetter: 'S',
    reviewCount: '1 review'
  },
  {
    id: 'rev-astro',
    author: 'A S T R O',
    rating: 5,
    timeAgo: 'a year ago',
    text: 'I wanted to make a few cosmetic changes to my apartment and shared my ideas with their team. The transformation was truly impressive — their innovative design techniques made a noticeable difference. And the best part? It was all very affordable. Definitely the best interior designer in Lahore!',
    tags: ['modern design', 'inviting spaces'],
    verified: true,
    avatarLetter: 'A',
    reviewCount: '2 reviews · 7 photos'
  },
  {
    id: 'rev-uzma-naseer',
    author: 'Uzma Naseer',
    rating: 5,
    timeAgo: '2 years ago',
    text: "What impressed me most about Ilhans Interiors is their commitment to tailored designs. As an interior designer in Lahore, they understood my preferences and translated them into a personalized and inviting living space. Every corner reflects our lifestyle.",
    ownerReply: 'Thank you for your valuable feedback! Please continue to visit our website for the latest updates.',
    tags: ['unique living space', 'inviting spaces'],
    verified: true,
    avatarLetter: 'U',
    reviewCount: '1 review'
  },
  {
    id: 'rev-hamza-tariq',
    author: 'Hamza Tariq (DHA Lahore)',
    rating: 5,
    timeAgo: '10 months ago',
    text: 'Engaged ILHAN’S Interiors for a 1-Kanal new construction in DHA Phase 6. From initial 3D renderings to custom travertine joinery, their architectural oversight is world class. Outstanding space planning and timely delivery.',
    tags: ['architecture', 'modern design'],
    verified: true,
    avatarLetter: 'H',
    reviewCount: '4 reviews'
  },
  {
    id: 'rev-dr-farhan',
    author: 'Dr. Farhan Malik',
    rating: 4,
    timeAgo: '8 months ago',
    text: 'Commissioned ILHAN’S team for our executive study and clinic reception in Model Town. The custom dark oak woodwork and warm illumination created a tranquil, welcoming atmosphere. Very responsive design team located right on Model Town Link Rd.',
    tags: ['modern design', 'inviting spaces'],
    verified: true,
    avatarLetter: 'F',
    reviewCount: '3 reviews'
  },
  {
    id: 'rev-maryam-khalid',
    author: 'Maryam Khalid',
    rating: 5,
    timeAgo: '1 year ago',
    text: 'Exceptional aesthetic taste and transparency. They remodeled our drawing room and open kitchen with seamless waterfall marble counters. Rare to find this level of meticulous execution in Lahore without blowing up budgets.',
    tags: ['architecture', 'unique living space'],
    verified: true,
    avatarLetter: 'M',
    reviewCount: '2 reviews'
  }
];
