import {api} from './apiClient';

interface cartItem {
  cartItem:[],
  quantity:number,
  selected:boolean,
}

export interface Producttype extends cartItem {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  tags: string[];
  brand: string;
  sku: string;
  weight: number;

  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: "In Stock" | "Low Stock" | "Out of Stock";

  reviews: {
    rating: number;
    comment: string;
    date: string; // ISO string
    reviewerName: string;
    reviewerEmail: string;
  }[];

  returnPolicy: string;
  minimumOrderQuantity: number;

  meta: {
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
    barcode: string;
    qrCode: string;
  };

  images: string[];
  thumbnail: string;
}

export const fetchProductDetails = async (id: string): Promise<Producttype> => {
    const response = await api.get(`/products/${id}`)
    return response.data;
}