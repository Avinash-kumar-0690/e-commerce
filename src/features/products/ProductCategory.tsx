import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import type { ProductListResponse } from "../../app/services/products/product.types";
import { fetchProductsByCategory } from "../../app/services/products/product.api";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import ProductCardSkeleton from "../../ui/skeleton/ProductCardSkeleton";


const ProductCategory = () => {
  const { category } = useParams<{ category:any}>();

  //Change the title for this page 
  useDocumentTitle(
    `cartify - ${category} Details`)
    console.log(category)

  
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

  if (isLoading) {
    return(
      <div className="grid grid-cols-2 m-12 sm:grid-cols-3 md:grid-cols-4 gap-6 xs:max-sm:gap-2">

  {Array.from({length:8}).map((_,)=>(<ProductCardSkeleton />))}
</div>
    )
  }

  if (isError && error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  return data ? <ProductList data={data} /> : null;
};

export default ProductCategory;