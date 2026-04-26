
import { useProductCategories } from "../app/services/products/product.queries";
import CategorySectionHome from "../components/sections/CategorySection";

export  const defaultTitle = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery"
const Home = () => {
  const categoriesQuery = useProductCategories();
  console.log(categoriesQuery)

  console.log("Home is working")


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
