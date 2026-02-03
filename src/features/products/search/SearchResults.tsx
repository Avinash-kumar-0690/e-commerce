import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ProductList from "../ProductList";
import { searchProducts } from "../../../app/services/products/product.api";
import type { ProductListResponse } from "../../../app/services/products/product.types";

const SearchResults = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";

  const limit = 15;
  const skip = 0;

  const { data, isLoading, isError, error } = useQuery<ProductListResponse>({
    queryKey: ["products", "search", query, limit, skip],
    queryFn: () => searchProducts(query, { limit, skip }),
    enabled: query.length > 0, // CRITICAL
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <div>Error: {(error as Error).message}</div>;

  if (!data || data.products.length === 0)
    return <div>No results found</div>;

  return <ProductList data={data.products} />;
};

export default SearchResults;