import { useQuery } from "@tanstack/react-query";

export const useProductCategories = () => {
  const {data:categories} = useQuery<[], Error>({
    queryKey: ["productCategories"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products/category-list");
      return res.json();
    },
  });
  return categories
};
