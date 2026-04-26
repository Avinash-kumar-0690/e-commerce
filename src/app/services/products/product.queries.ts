import { useQuery } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchProductsByCategory,
  searchProducts,
} from "./product.api";
import { api } from "../apiClient";


// Fetch All Products 
export const useProducts = (params?: { limit?: number; skip?: number }) =>
  useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });

  // Fetch Products By Category 
export const useCategoryProducts = (
  category: string,
  params?: { limit?: number; skip?: number }
) =>
  useQuery({
    queryKey: ["products", "category", category, params],
    queryFn: () => fetchProductsByCategory(category, params),
    enabled: !!category,
  });


  // Fetch Products by Search 
export const useSearchProducts = (
  search: string,
  params?: { limit?: number; skip?: number }
) =>
  useQuery({
    queryKey: ["products", "search", search, params],
    queryFn: () => searchProducts(search, params),
    enabled: !!search,
  });




  
// Fetch Category List 
export const useProductCategories = () => {
  const { data: categories } = useQuery<string[], Error>({
    queryKey: ["productCategories"],
    queryFn: async () => {
      const res = await api.get("/products/category-list");
      return res.data;
    },
  });

  return categories;
};
