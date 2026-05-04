
import { useProductCategories } from "../app/services/products/product.queries";
import CategorySectionHome from "../components/sections/CategorySection";
import ProductCardSkeleton from "../ui/skeleton/ProductCardSkeleton";

export  const defaultTitle = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery"
const Home = () => {
  const categoriesQuery = useProductCategories();
if(!categoriesQuery){
return (
  <>
  
<div className="grid grid-cols-2 m-12 sm:grid-cols-3 md:grid-cols-4 mx-8 gap-10 xs:max-sm:gap-2">

  {Array.from({length:8}).map((_,)=>(<ProductCardSkeleton />))}
</div>
  </>
)
} 

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
