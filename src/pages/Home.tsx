
import { useProductCategories } from "../app/services/products/useProductCategories";

import CategorySectionHome from "../components/sections/CategorySectionHome";

export  const defaultTitle = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery"
const Home = () => {
  const categoriesQuery = useProductCategories();
  console.log(categoriesQuery)


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
