import { api } from "../apiClient";import type { PaginationParams, ProductListResponse } from "./product.types";
;

const buildQuery = ({ limit, skip }: PaginationParams) => {
  const query = new URLSearchParams();

  if (limit !== undefined) query.set("limit", String(limit));
  if (skip !== undefined) query.set("skip", String(skip));

  return query.toString();
};

/** Get all products */
export const fetchProducts = async (
  params: PaginationParams = {}
): Promise<ProductListResponse> => {
  const query = buildQuery(params);
  const url = query ? `/products?${query}` : "/products";

  const res = await api.get<ProductListResponse>(url);
  return res.data;
};

/** Get products by category */
export const fetchProductsByCategory = async (
  category: string,
  params: PaginationParams = {}
): Promise<ProductListResponse> => {
  if (!category) throw new Error("Category is required");

  const query = buildQuery(params);
  const url = query
    ? `/products/category/${category}?${query}`
    : `/products/category/${category}`;

  const res = await api.get<ProductListResponse>(url);
  return res.data;
};

/** Search products */
export const searchProducts = async (
  search: string,
  params: PaginationParams = {}
): Promise<ProductListResponse> => {
  if (!search) throw new Error("Search query is required");

  const query = buildQuery(params);
  const url = query
    ? `/products/search?q=${search}&${query}`
    : `/products/search?q=${search}`;

  const res = await api.get<ProductListResponse>(url);
  return res.data;
};