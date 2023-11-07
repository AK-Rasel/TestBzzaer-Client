// import { useLoaderData, useParams } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Order = () => {
    // const orderFoodData = useLoaderData()
    // console.log(orderFoodData)

    // const { id } = useParams()
    // const orderInputData = orderFoodData.find(orderFoodDataDetail => orderFoodDataDetail._id == id)
    // const { _id,FoodName, FoodImage, FoodCategory, Price, Rating, Quantity, Description, Count, Country

    // } =  orderInputData
    return (
        <div className="hero  min-h-[70vh] opacity-6 " style={{backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)'}}>
        <div className=" items-center justify-center m  lg:flex w-full   p-8">
          
          {/* card body */}
          <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg">
  
            <div className="card-body  gap-4">
            <p className="font-bold  normal-case text-3xl text-[#f56511]">Order</p>
  
              
  
              
              <form >
                <div className="form-control">
                  <label className="label">
                    <span className=" text-sm">Email</span>
                  </label>
                  <input type="email" name="email" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                  
                </div>
                <div className="flex justify-end mt-6">
                  <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] hover:bg-[#f55211] text-base  text-white font-semibold">Continue</button>
                </div>
              </form>
              
             
            </div>
            
          </div>
          
        </div>
      </div>
    );
};

export default Order;