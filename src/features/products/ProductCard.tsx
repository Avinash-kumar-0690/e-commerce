import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  price: number;
  navigateTo?:boolean
}


//This component displays individual product information in a card format
const ProductCard = ({
  id,
  title,
  category,
  thumbnail,
  price,
  navigateTo=false,
}: ProductCardProps) => {
  const navigate = useNavigate();

  // Navigate to Product Details
  const navigateProductDetails = () => {
    if(!id) return;
    navigate(`/products/product/${id}`)
  }

  // Navigate to category page on click
  const navigateProductCategory = () => {
   navigate(`/products/category/${category}`);
  };


  const handleProductNavigation = () => {
    if(navigateTo) {
      navigateProductCategory()
    }
    else {
      navigateProductDetails()
    }
  }
  return (
    <div
      onClick={handleProductNavigation}
      className="
        cursor-pointer rounded-lg border
        bg-white dark:bg-[#1f1f1f]
        hover:shadow-lg dark:hover:shadow-mode-dark
        transition-all duration-300
        flex flex-col xs:max-sm:mt-5"
    >
      {/* IMAGE */}
      <div className="p-4 flex justify-center items-center bg-gray-50 dark:bg-[#2a2a2a] rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="h-36 object-contain"
          loading="lazy"
        />
      </div>

      {/* DETAILS */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {category}
        </p>

        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            ${price}
          </span>

    
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
