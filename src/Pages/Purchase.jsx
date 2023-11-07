import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Purchase = () => {
  
    return (
      <div className="hero  min-h-[70vh] opacity-6 " style={{backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)'}}>
      <div className=" items-center justify-center m  lg:flex w-full   p-8">
        
        {/* card body */}
        <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg">

          <div className="card-body  gap-4">
          <p className="font-bold  normal-case text-3xl "><span className="text-[#f56511]">Purchase</span> item</p>
            <form >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input type="text" name="food_name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" name="price" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="number" name="quantity" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>

                {/* user bying email */}
                <input type="email" name="email" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <DatePicker label="Basic date picker" className="border-b px-4 h-7 text-lg w-full  border-gray-300  outline-none" required />
                {/* <input type="text" name="food_origin" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required /> */}
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