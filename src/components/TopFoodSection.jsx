import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const TopFoodSection = () => {
    const [topFoods, setTopFood] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/all-food-items')
            .then(res => res.json())
            .then(data => setTopFood(data))
    }, [])
    return (
        <div>
            <div className='grid justify-center text-center my-11'>
                <h1 className='lg:text-5xl text-4xl  font-extrabold'>Top Food</h1>
                <img className=' mt-5 w-10/12 lg:w-full' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 container mx-auto gap-10">
                {
                    topFoods?.slice(0, 6).map(topFood => (<div key={topFood._id}>

                        <div className="card mx-8 bg-base-100 shadow-xl">

                            <figure className="h-60 bg-cover"><img src={topFood.FoodImage} alt="Shoes" /></figure>

                            <div className="card-body">
                                <div className="badge badge-outline">{topFood.FoodCategory}</div>
                                <h2 className="card-title">
                                    {topFood.FoodName}
                                    <div className="badge badge-secondary text-white"> {topFood.Quantity}</div>
                                </h2>

                                <h2 className="text-lg font-semibold">Tk {topFood.Price}</h2>

                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                </div>

                                <div className="card-actions justify-end">
                                    <Link >
                                        <button className="px-6 py-3 rounded-full bg-[#F56511] text-white">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>))
                }
            </div>
            <div>

            </div>
            <Link className="grid justify-center my-10">
                <button className="px-6 py-3 rounded-full bg-[#F56511] hover:border-[#F56511] border-2 border-[#F56511] font-medium shadow-lg  text-xl hover:bg-white hover:text-[#F56511]  text-white">Details</button>
            </Link>
        </div>
    );
};

export default TopFoodSection;