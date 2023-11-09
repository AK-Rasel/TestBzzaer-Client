import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Helmet } from "react-helmet";
import MyFoodItem from "../components/MyFoodItems/MyFoodItem";
import toast from "react-hot-toast";


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


    
    const updateFoodHandler= e =>{
        e.preventDefault()
      const from = e.target
      const foodname = from.food_name.value
      const price = from.price.value
      const quantity = from.quantity.value
      const email = from.email.value
      const name = from.name.value
      const foodcategory = from.food_category.value
      const country = from.food_origin.value
      const description = from.description.value
      const foodimage = from.foodimage.value
    //   console.log(foodname,price,quantity,email,name,foodcategory,country,description)

     
      const updateFood = {foodname,price :price ,quantity,email,name,foodcategory,country,description,foodimage}



console.log(updateFood)

        fetch(`http://localhost:5000/all-food-items/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                toast.success('Successfully toasted!')
            }
        })
    } 
    

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
                            foodItem={foodItem} updateFoodHandler= {updateFoodHandler}></MyFoodItem>)
                       }
                   </tbody>
               </table>
           </div>
       </div>
   </div>
    );
};

export default MyFoodItems;