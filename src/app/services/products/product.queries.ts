import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductsByCategory,
  searchProducts,
} from "./product.api";

export const useProducts = (params?: { limit?: number; skip?: number }) =>
  useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });

export const useCategoryProducts = (
  category: string,
  params?: { limit?: number; skip?: number }
) =>
  useQuery({
    queryKey: ["products", "category", category, params],
    queryFn: () => fetchProductsByCategory(category, params),
    enabled: !!category,
  });

export const useSearchProducts = (
  search: string,
  params?: { limit?: number; skip?: number }
) =>
  useQuery({
    queryKey: ["products", "search", search, params],
    queryFn: () => searchProducts(search, params),
    enabled: !!search,
  });