// import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";



const AddFoodItem = () => {
    const { user } = useContext(AuthContext)
    const addFoodHandler = e => {

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
      console.log(foodname,price,quantity,email,name,foodcategory,country,description)

     const addFood = {foodname,price :price ,quantity,email,name,foodcategory,country,description,foodimage}



      fetch('http://localhost:5000/all-food-items',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(addFood)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        toast.success('Purchase successfully Done')
      }
      from.reset()
    })
    }
    return (
        <div className="hero  min-h-[70vh] opacity-6 " style={{backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)'}}>
           <Helmet>
                <meta charSet="utf-8" />
                <title>TasteBazaar | Add food</title>
            </Helmet>
        <div className=" items-center justify-center m  lg:flex w-full   p-8">
          
          {/* card body */}
          <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg">
  
            <div className="card-body  gap-4">
            <p className="font-bold  normal-case text-3xl "><span className="text-[#f56511]">Add food</span> item</p>
  
             
  
              
              <form onSubmit={addFoodHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-sm">Name</span>
                  </label>
                  <input  type="text" disabled defaultValue={user.displayName} name="name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-sm">Email</span>
                  </label>
                  <input disabled type="email" name="email"  defaultValue={user.email} className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className=" text-sm">Food Image Url</span>
                  </label>
                  <input  type="url" name="foodimage"  className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Name</span>
                  </label>
                  <input type="text" name="food_name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Category</span>
                  </label>
                  <input type="text" name="food_category" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="number" placeholder="$" name="price" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input type="number" name="quantity" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Food Origin</span>
                  </label>
                  <input type="text" name="food_origin" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea rows="10" type="text" name="description"   wrap="hard" className="border-b px-4 h-20   border-gray-300 text-base outline-none" required />
                  
                </div>
                <div className="flex justify-end mt-6">
                  <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] hover:bg-[#f55211] text-base  text-white font-semibold">Add Item</button>
                </div>
              </form>
              
             
            </div>
            
          </div>
          
        </div>
      </div>
    );
};

export default AddFoodItem;