import { Link, useLoaderData } from "react-router-dom";


const AllFoodItems = () => {
    const allFoodData = useLoaderData()
    // console.log(allFoodData)
    return (
        <div>
            <div>
                <div className="hero min-h-[40vh] mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/KFBTyJW/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg)' }}>
                    <div className="hero-overlay "></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="lg:text-8xl text-5xl md:text-6xl ">All Food Items</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="max-w-[1280px] mx-auto">
               <div className="mx-10">
               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {
                        allFoodData.map(foodData => (<div key={foodData._id}>

                            <div className="card  bg-base-100 shadow-xl">

                                <figure className="h-60 bg-cover"><img src={foodData.FoodImage} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <div className="badge badge-outline">{foodData.FoodCategory}</div>
                                    <h2 className="card-title">
                                        {foodData.FoodName}
                                        <div className="badge badge-secondary text-white"> {foodData.Quantity}</div>
                                    </h2>

                                    <h2 className="text-lg font-semibold">$ {foodData.Price}</h2>

                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" checked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F56511]" />
                                    </div>

                                    <div className="card-actions justify-end">
                                        <Link to={`/food-detail/${foodData._id}`}>
                                            <button className="px-6 py-3 rounded-full bg-[#F56511] text-white">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>))
                    }
                </div>
               </div>
            </div>
        </div>
    );
};

export default AllFoodItems;