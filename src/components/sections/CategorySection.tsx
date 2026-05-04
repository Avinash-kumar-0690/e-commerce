import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../features/products/ProductCard";
import type { ProductListResponse } from "../../app/services/products/product.types";
import ProductCardSkeleton from "../../ui/skeleton/ProductCardSkeleton";
import { fetchProductsByCategory } from "../../app/services/products/product.api";

const CategorySectionHome = ({ category }: { category: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Important to load only once
    rootMargin: "200px", //preload before in view
  });



  // Fetch Product by Category 
  const categoriesQuery = useQuery<ProductListResponse>({
    queryKey: ["product-category", category],
    queryFn: () =>fetchProductsByCategory( category, {limit: 4, skip:0, }),
    enabled: inView, // only fetch when in view
    staleTime: 1000 * 60 * 10,
  });


  return (
    <section ref={ref} key={category} className={`${category}-section px-8 xs:max-sm:p-2`}>
      <h2 className="text-xl font-semibold h-8 mb-4 text-gray-800 dark:text-gray-100 capitalize">
        {categoriesQuery.isSuccess?category:null}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xs:max-sm:gap-2">
      {categoriesQuery?.isPending? Array.from({length:4}).map((_,)=>(<ProductCardSkeleton />)):null}
        {categoriesQuery?.data?.products?.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            thumbnail={product.thumbnail}
            price={product.price}
            navigateTo={true}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySectionHome;
