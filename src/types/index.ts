export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}