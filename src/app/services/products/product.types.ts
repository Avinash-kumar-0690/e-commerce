export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
};

export type ProductListResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type PaginationParams = {
  limit?: number;
  skip?: number;
};