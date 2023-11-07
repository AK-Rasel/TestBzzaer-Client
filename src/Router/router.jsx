import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../Pages/Home";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import AddFoodItem from "../Pages/AddFoodItem";
import FoodDetail from "../Pages/FoodDetail";
import MyFoodItems from "../Pages/MyFoodItems";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import Purchase from "../Pages/Purchase";
import MyOrderedItems from "../Pages/MyOrderedItems";
// import PrivetRouter from "../PrivetRouter/PrivetRouter";

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
            element:<AllFoodItems/>,
            loader:() => fetch('http://localhost:5000/all-food-items')
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"my-food-items",
            element:<PrivetRouter><MyFoodItems/></PrivetRouter>
        },
        {
            path:"food-detail/:id",
            element:<FoodDetail/>,
            loader: ({params}) => fetch(`http://localhost:5000/all-food-items/${params.id}`)
        },
        {
            path:"added-food-item",
            element:<PrivetRouter><AddFoodItem/></PrivetRouter>
        },
        {
            path:"purchase/:id",
            element:<PrivetRouter><Purchase/></PrivetRouter>,
            loader: ({params}) => fetch(`http://localhost:5000/all-food-items/purchase-detail/${params.id}`)
            
        },
        {
            path:"ordered-items",
            element:<PrivetRouter><MyOrderedItems/></PrivetRouter>
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