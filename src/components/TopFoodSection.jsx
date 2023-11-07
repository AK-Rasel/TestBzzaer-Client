import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const TopFoodSection = () => {
    const [topFoods, setTopFood] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/all-food-items')
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

                            <figure className="h-60 bg-cover"><img src={topFood.foodimage} alt="Shoes" /></figure>

                            <div className="card-body">
                                <div className="badge badge-outline">{topFood.foodcategory}</div>
                                <h2 className="card-title">
                                    {topFood.foodname}
                                    <div className="badge badge-secondary text-white"> {topFood.quantity}</div>
                                </h2>

                                <h2 className="text-lg font-semibold">$ {topFood.price}</h2>

                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                </div>

                                <div className="card-actions justify-end">
                                    <Link to={`/food-detail/${topFood._id}`}>
                                        <button className="px-6 py-3 rounded-xl hover:bg-[#F56511] hover:rounded-full bg-[#F56511] font-Ubuntu text-white">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>))
                }
            </div>
            <div>

            </div>
            <Link to={"/all-food-items"} className="grid  justify-center my-10">
                <button className="px-4 font-Ubuntu text-base text-white btn my-4  rounded-xl hover:bg-[#F56511] hover:rounded-full bg-[#F56511]">See More</button>
            </Link>
        </div>
    );
};

export default TopFoodSection;