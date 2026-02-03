import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import type { ProductListResponse } from "../../app/services/products/product.types";
import { fetchProductsByCategory } from "../../app/services/products/product.api";

const ProductCategory = () => {
  const { category } = useParams<{ category:any}>();

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<ProductListResponse>({
    queryKey: ["product-search", category],
    queryFn: () => fetchProductsByCategory(category, {limit:15, skip:0}),
    enabled: !!category,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  return data ? <ProductList data={data} /> : null;
};

export default ProductCategory;