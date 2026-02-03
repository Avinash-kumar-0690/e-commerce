import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Cart from '../features/cart/Cart'
import SearchResults from '../features/products/search/SearchResults'
import ProductCategory from '../features/products/ProductCategory'
import ProductDetails from '../features/products/ProductDetails'
import PlaceOrder from '../features/PlaceOrder'
import OrderSuccess from '../features/OrderSuccess'


export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "cart",
                element: <Cart />

            },
            {
                path: "place-order",
                element: <PlaceOrder />

            },
            {
                path: "order-success",
                element: <OrderSuccess />

            },
            {
                path: "products",
                children: [
                    {
                        path: "product/:id",
                        element:<ProductDetails />
                    },
                    {
                        path: "category/:category",
                        element:<ProductCategory />
                    },

                    {
                        path: "search",
                        element:<SearchResults />
                    },
                ],

            },
        ],
    },
])