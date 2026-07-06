export interface Project {
  id: string;
  title: string;
  category: 'Architecture' | 'Interior Design' | 'Planning & Consultancy' | 'Digital Design';
  subCategory: string;
  image: string;
  description: string;
  location: string;
  year: string;
  area: string;
  client: string;
  specs: string[];
}

export interface ServiceDetail {
  title: string;
  items: string[];
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}
