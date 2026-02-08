import CheckoutForm from "../features/checkout/CheckoutForm"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";




const Checkout = () => {
  const navigate = useNavigate();

const selectedItems = useAppSelector(state =>
  state.cart.items.filter(item => item.selected)
);

useEffect(() => {
  if (!selectedItems.length) {
    navigate("/order-success", { replace: true });
  }
}, [selectedItems, navigate]);

  return (
    <>
    <CheckoutForm />
    </>
  )
}

export default Checkout
