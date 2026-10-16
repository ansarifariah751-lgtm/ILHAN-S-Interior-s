export interface Project {
  id: string;
  title: string;
  category: 'villas' | 'living' | 'bedroom' | 'kitchen' | 'executive';
  categoryLabel: string;
  location: string;
  area: string;
  year: string;
  image: string;
  summary: string;
  description: string;
  materials: string[];
  features: string[];
  clientType: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  ownerReply?: string;
  tags: string[];
  verified: boolean;
  avatarLetter: string;
  reviewCount?: string;
}

export interface EstimationConfig {
  propertyType: string;
  propertySize: string;
  rooms: string[];
  finishTier: 'contemporary' | 'neo-classical' | 'organic-minimalist';
  services: string[];
}
