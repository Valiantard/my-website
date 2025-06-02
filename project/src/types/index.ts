export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  featured: boolean;
  type: 'rumah' | 'apartemen' | 'tanah';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}