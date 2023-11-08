import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Helmet } from "react-helmet";
import MyFoodItem from "../components/MyFoodItems/MyFoodItem";


const MyFoodItems = () => {
    const {user} = useContext(AuthContext)
    const [foodItems,setFoodItems]= useState([])
    const url = `http://localhost:5000/all-food-items/?email=${user.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json()
        .then(data => {
            setFoodItems(data)
        }))
    },[])

    return (
        <div className="">
        <Helmet>
           <meta charSet="utf-8" />
           <title>TasteBazaar | My Food Items</title>
       </Helmet>
       <div className="container  mx-auto ">

           <div className="overflow-x-auto ">
               <table className="table ">
                   {/* head */}
                   <thead>
                       <tr>
                           <th className="text-base">
                           Items Name
                           </th>
                           <th className="text-base">owner</th>
                           <th className="text-base">Job</th>
                           <th className="text-base">Favorite Color</th>
                           <th className="text-base"></th>
                       </tr>
                   </thead>
                   <tbody >
                       {/* row 1 */}
                       {
                           foodItems?.map(foodItem => <MyFoodItem key={foodItem._id}
                            foodItem={foodItem}></MyFoodItem>)
                       }
                   </tbody>
               </table>
           </div>
       </div>
   </div>
    );
};

export default MyFoodItems;