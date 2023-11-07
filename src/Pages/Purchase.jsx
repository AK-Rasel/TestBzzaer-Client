import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
// import { useState } from "react";
const Purchase = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData()
  const { email, displayName } = user
  const { FoodName, Price} = foodData

  // const [price,setPrice] = useState('')
  // const [quantity,setQuantity] = useState('')

// Handler
 const purchaseHandler = e => {
  e.preventDefault()
  
  const from = e.target
  const foodName = from.food_name.value
  const price = from.price.value
  const quantity = from.quantity.value

  const email = from.email.value
  const name = from.name.value
  const date  = from.date.value



    console.log(email)
  
   }

  return (
    <div className="hero  min-h-[70vh] opacity-6 " style={{ backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)' }}>
      <div className=" items-center justify-center m  lg:flex w-full   p-8">

        {/* card body */}
        <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg">

          <div className="card-body  gap-4">
            <p className="font-bold  normal-case text-3xl "><span className="text-[#f56511]">Purchase</span> item</p>
            <form onSubmit={purchaseHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input type="text" defaultValue={FoodName} name="food_name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number"  defaultValue={"$" + Price} name="price" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="number" defaultValue={1} name="quantity"  className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" defaultValue={displayName} disabled name="name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>

                {/* user bying email */}
                <input type="email" name="email" disabled defaultValue={email} className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Purchase Date</span>
                </label>

                <input type="date" name="date" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>
              <div className="flex justify-end mt-6">
                <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] hover:bg-[#f55211] text-base  text-white font-semibold">Now Purchase</button>
              </div>
            </form>


          </div>

        </div>

      </div>
    </div>
  );
};

export default Purchase;