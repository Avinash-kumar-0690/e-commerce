import {
  removeFromCart,
  clearCart,
  updateQuantity,
  toggleSelect,
} from "./cartSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Your cart is empty
      </div>
    );
  }

  const handlePlaceOrder = () => {
    const selectedItems = items.filter((item) => item.selected);

    if (selectedItems.length === 0) {
      alert("Select at least one item");
      return;
    }

    navigate("/place-order", {
      state: { items: selectedItems },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="w-11/12 mx-auto flex gap-6">
        {/* LEFT */}
        <div className="w-3/4 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white border p-4 rounded"
            >
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => dispatch(toggleSelect(item.id))}
              />

              <img
                src={item.images[0]}
                className="w-24 h-24 object-contain"
                alt={item.title}
              />

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
                        })
                      )
                    }
                    className="px-2 border disabled:opacity-50"
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
                        })
                      )
                    }
                    className="px-2 border"
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
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-1/4 bg-white border p-6 rounded h-fit">
          <h2 className="font-semibold mb-4">Price Details</h2>

          <p className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </p>

          <button
            className="w-full mt-4 bg-orange-600 text-white py-3 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-2 text-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;