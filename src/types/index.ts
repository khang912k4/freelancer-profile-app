import Box from '@mui/material/Box';
Box;

export interface IService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  deliveryDays: number;
  field: string;
  country: string;
  imageUrl: string;
  gallery: string[];
  reviews: IReview[];
}

export interface IReview {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface ICartItem {
  serviceId: string;
  guests: number;
  price: number;
  selectedField?: string;
  date?: string;
}
