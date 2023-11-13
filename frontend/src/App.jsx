import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";
import GuestRoute from "./components/authComponents/GuestRoute";
import Error from "./components/error/Error";
import Search from "./pages/Search/Search";
import Category from "./pages/Category/Category";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
        errorElement: <Error />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/category/:slug",
        element: <Category />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
