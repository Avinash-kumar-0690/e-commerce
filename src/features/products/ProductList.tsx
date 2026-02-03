import "../../components/Header.css"
import ProductCard from "./ProductCard";

export interface ApiData {
  id:string;
  title:string;
  category:string;
  thumbnail:string;
  price:number;
}
const ProductList = ({data}:any)=> {
 return (
    <div className="w-11/12 mx-auto py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data?.products?.map((product: any) => (
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
    </div>
  );
}

export default ProductList
 