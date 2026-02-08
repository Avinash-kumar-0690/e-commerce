import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeSelectedItems } from "../cart/cartSlice";

type State = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  error: string;
};

type Action =
  | { type: "CHANGE_FIELD"; field: keyof State; value: string }
  | { type: "SET_ERROR"; value: string }
  | { type: "RESET" };

const initialState: State = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  error: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        error: "",
      };
    case "SET_ERROR":
      return { ...state, error: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const CheckoutForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const Dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: "CHANGE_FIELD",
      field: e.target.name as keyof State,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Brutal validation (minimum required)
    if (!state.fullName || !state.phone || !state.address) {
      dispatch({
        type: "SET_ERROR",
        value: "Name, phone, and address are required",
      });
      return;
    }

    Dispatch(removeSelectedItems());
    navigate("/order-success");

    console.log("Checkout data:", state);
    // placeOrder(state) or navigate("/payment")
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Checkout Details</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 ss:p-6 space-y-4"
        >
          {state.error && (
            <p className="text-red-500 text-xs ss:text-sm">{state.error}</p>
          )}

          {/* Full Name */}
          <input
            name="fullName"
            placeholder="Full Name"
            value={state.fullName}
            onChange={handleChange}
            className="input"
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            className="input"
          />

          {/* Phone */}
          <input
            name="phone"
            placeholder="Phone Number"
            value={state.phone}
            onChange={handleChange}
            className="input"
          />

          {/* Address – FULL WIDTH */}
          <textarea
            name="address"
            placeholder="Full Address"
            value={state.address}
            onChange={handleChange}
            className="input h-24 resize-none"
          />

          {/* City / State / Pincode */}
          <div className="grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 gap-3">
            <input
              name="city"
              placeholder="City"
              value={state.city}
              onChange={handleChange}
              className="input"
            />
            <input
              name="state"
              placeholder="State"
              value={state.state}
              onChange={handleChange}
              className="input"
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={state.pincode}
              onChange={handleChange}
              className="input"
            />
          </div>

          <button
            type="submit"
            className="
      w-full
      bg-blue-600 hover:bg-blue-700
      text-white
      py-3
      text-sm ss:text-base
      rounded-md
      font-medium
      transition
    "
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
