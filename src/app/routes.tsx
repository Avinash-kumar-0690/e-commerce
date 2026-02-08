import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense, type JSX } from "react";
import MainLayout from "../layout/MainLayout";

// Lazy pages
const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../pages/Contact"));
const Checkout = lazy(() => import("../pages/Checkout"));

// Lazy features
const Cart = lazy(() => import("../features/cart/Cart"));
const ProductCategory = lazy(
  () => import("../features/products/ProductCategory")
);
const ProductDetails = lazy(
  () => import("../features/products/ProductDetails")
);
const SearchResults = lazy(
  () => import("../features/products/search/SearchResults")
);
const OrderSuccess = lazy(
  () => import("../features/checkout/OrderSuccess")
);
const OrderSummary = lazy(
  () => import("../features/checkout/OrderSummary")
);

const withSuspense = (element:JSX.Element) => (
  <Suspense fallback={<div>Loading...</div>}>
    {element}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "contact",
        element: withSuspense(<Contact />),
      },
      {
        path: "cart",
        element: withSuspense(<Cart />),
      },
      {
        path: "checkout",
        element: withSuspense(<Checkout />),
      },
      {
        path: "order-summary",
        element: withSuspense(<OrderSummary />),
      },
      {
        path: "order-success",
        element: withSuspense(<OrderSuccess />),
      },
      {
        path: "products",
        children: [
          {
            path: "category/:category",
            element: withSuspense(<ProductCategory />),
          },
          {
            path: "product/:id",
            element: withSuspense(<ProductDetails />),
          },
          {
            path: "search",
            element: withSuspense(<SearchResults />),
          },
        ],
      },
    ],
  },
]);
