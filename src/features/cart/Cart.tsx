import {
  removeFromCart,
  clearCart,
  updateQuantity,
  toggleSelect,
} from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.items);

  const handleBacktoHome = (): void => {
    navigate("/");
  };

  const totalPrice = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 dark:bg-black dark:text-white">
        Your cart is empty
        <button
          onClick={handleBacktoHome}
          className="px-2 border rounded bg-green-700 border-gray-300 text-2xl dark:border-gray-600 disabled:opacity-50"
        >
          Go to Home page
        </button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    const selectedItems = items.filter((item) => item.selected);
    if (!selectedItems.length) {
      alert("Select at least one item");
      return;
    }
    navigate("/order-summary", { state: { items: selectedItems } });
  };

  return (
    <div className="min-h-screen py-10 bg-gray-100 dark:bg-black dark:text-white">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-6">
        {/* LEFT */}
        <div className="w-full md:w-3/4 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 flex-col sm:flex-row rounded border 
                         bg-white border-gray-200
                         dark:bg-gray-900 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => dispatch(toggleSelect(item.id))}
                  className="accent-orange-600"
                />

                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    disabled={item.quantity === 1}
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        }),
                      )
                    }
                    className="px-2 border rounded
                               border-gray-300
                               dark:border-gray-600
                               disabled:opacity-50"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    className="px-2 border rounded
                               border-gray-300
                               dark:border-gray-600"
                  >
                    +
                  </button>
                </div>

                <p className="mt-2 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:underline self-start sm:self-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div
          className="w-full md:w-1/4 p-5 md:p-6 rounded h-fit border
                     bg-white border-gray-200
                     dark:bg-gray-900 dark:border-gray-700"
        >
          <h2 className="font-semibold mb-4">Price Details</h2>

          <p className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </p>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-4 bg-orange-600 hover:bg-orange-700
             text-white py-3 rounded text-sm sm:text-base"
          >
            Order Summary
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-2 text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
