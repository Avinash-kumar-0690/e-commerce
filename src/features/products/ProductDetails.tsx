import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "../cart/cartSlice";
import {
  fetchProductDetails,
  type Producttype,
} from "../../app/services/ProductClient";
import { useAppDispatch } from "../../app/store/hooks";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const productQuery = useQuery<Producttype, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetails(id!),
    enabled: !!id,
  });

  if (productQuery.isLoading) {
    return (
      <div className="py-20 text-center text-gray-700 dark:text-gray-300">
        Loading product...
      </div>
    );
  }

  if (productQuery.isError || !productQuery.data) {
    return (
      <div className="py-20 text-center text-red-600">
        Failed to load product
      </div>
    );
  }

  const product = productQuery.data;
  // handle adding cart items
  const handleCart = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleBuyNow = () => {
  navigate("/place-order", {
      state: {
        items: [
          {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
          },
        ],
      },
    });
};

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="w-11/12 mx-auto py-8 flex gap-10">
        {/* IMAGE SECTION */}
        <div className="w-2/5 sticky top-20 self-start">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-105 object-contain"
            />

            <div className="flex gap-4 mt-6">
              <button
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-semibold"
                onClick={handleCart}
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold"
              onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="w-3/5 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-8 space-y-6">
          {/* TITLE */}
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
              {product.rating} ★
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.reviews.length} ratings
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-end gap-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <span className="text-gray-400 dark:text-gray-500 line-through">
              $
              {(
                product.price / product.discountPercentage +
                product.price
              ).toFixed(2)}
            </span>
            <span className="text-green-600 font-semibold">
              {product.discountPercentage}% off
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
          </div>

          {/* POLICIES */}
          <div className="border-t dark:border-gray-700 pt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>

          {/* REVIEWS */}
          <div className="border-t dark:border-gray-700 pt-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Top Reviews
            </h2>

            <div className="space-y-4">
              {product.reviews.slice(0, 2).map((review, index) => (
                <div
                  key={index}
                  className="border dark:border-gray-700 rounded p-4"
                >
                  <p className="font-medium text-gray-900 dark:text-white">
                    {review.rating} ★
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
