import { useLocation, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const items = state?.items;
  
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No items selected for order
      </div>
    );
  }

  const total = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-8/12 mx-auto bg-white p-6 rounded">
        <h1 className="text-xl font-bold mb-4">Order Summary</h1>

        {items.map((item: any) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="flex justify-between mt-4 font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button
          className="w-full mt-6 bg-green-600 text-white py-3 rounded"
          onClick={() => {
            alert("Order placed successfully");
            navigate("/");
          }}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;