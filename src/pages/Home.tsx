import { useQueries, useQuery } from "@tanstack/react-query";
import { useProductCategories } from "../app/services/useProductCategories";
import { fetchHomeApi } from "../app/services/HomeClient";
import ProductCard from "../features/products/ProductCard";
import CategorySectionHome from "../features/products/CategorySectionHome";

const CATEGORY_LIMIT = 6; // show only N items, can adjust

const Home = () => {
  const categoriesQuery = useProductCategories();
  console.log(categoriesQuery)

  // const productsQueries = useQueries({
  //   queries:
  //     categoriesQuery.data?.map((cat) => ({
  //       queryKey: ["products", cat],
  //       queryFn: () => fetchHomeApi({ limit: 6, category: cat }),
  //       staleTime: 1000 * 60 * 5,
  //     })) ?? [], // ensure array exists
  // });

return (
<>
{categoriesQuery?.map(cat => (
  <CategorySectionHome key={cat}
  category={cat} />
))}
</>
)
};

export default Home;
