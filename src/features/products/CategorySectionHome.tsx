import { useInView } from "react-intersection-observer";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { fetchProductsByCategory } from "../../app/services/products/product.api";
import type { ProductListResponse } from "../../app/services/products/product.types";

const CategorySectionHome = ({ category }: { category: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Important to load only once
    rootMargin: "200px", //preload before in view
  });

  const categoriesQuery = useQuery<ProductListResponse>({
    queryKey: ["product-category", category],
    queryFn: () =>fetchProductsByCategory( category, {limit: 5, skip:0, }),
    enabled: inView, // only fetch when in view
    staleTime: 1000 * 60 * 10,
  });
  console.log(categoriesQuery.data);


  // Navigate to category page on click
  const navigateCategory = () => {
    window.location.href = `/products/category/${category}`;
  };
  return (
    <section ref={ref} key={category} className="px-8" onClick={navigateCategory}>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 capitalize">
        {category}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categoriesQuery?.data?.products?.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySectionHome;
