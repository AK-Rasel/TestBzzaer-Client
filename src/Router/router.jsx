import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";
import MyAddedFoodItems from "../Pages/MyAddedFoodItems";
import AddFoodItem from "../Pages/AddFoodItem";
import Order from "../Pages/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"all-food-items",
            element:<AllFoodItems/>
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"my-added-food-items",
            element:<MyAddedFoodItems/>
        },
        {
            path:"added-food-item",
            element:<AddFoodItem/>
        },
        {
            path:"order",
            element:<Order/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
      ]
    },
  ]);
  export default router;