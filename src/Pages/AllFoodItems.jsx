// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import TopFoodSectionSkeleton from "../components/TopFoodSectionSkeleton";
import axios from 'axios';

const AllFoodItems = () => {
    const allFoodData = useLoaderData()
    const [pagecount, setPagecount] = useState([]) 
    const {pageCount} = pagecount
    // const [itemPages,setitemPages] = useState(10)
    // const [showPages,setShowPages] = useState(0)
    const itemPages = 10;
    const numberOfPages = Math.ceil(pageCount / itemPages)
    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        
        pages.push(i)
    }
    // const pages = [...Array(numberOfPages).keys()]
    const [skeletonLoding, setSkeletonLoding] = useState(true)
   useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:5000/all-food-items')
                .then(res => {
                    setPagecount(res.data)
                    setSkeletonLoding(false)
                })
            // .then(data => setTopFood(data))
        }, 1000);

    }, [])
    
    
    // console.log(pages)
    // console.log(allFoodData)
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TasteBazaar | All Food Items</title>
            </Helmet>
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
               <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {
                        skeletonLoding ? 
                        <>
                        <TopFoodSectionSkeleton/>
                        <TopFoodSectionSkeleton/>
                        <TopFoodSectionSkeleton/>
                        <TopFoodSectionSkeleton/>
                        <TopFoodSectionSkeleton/>
                        <TopFoodSectionSkeleton/>
                        
                        
                        </> :
                        allFoodData.map(foodData => (<div key={foodData._id}>

                            <div className="card  bg-base-100 shadow-xl">

                                <figure className="h-60 bg-cover"><img src={foodData.foodimage} alt="Shoes" /></figure>

                                <div className="card-body">
                                    <div className="badge badge-outline">{foodData.foodcategory}</div>
                                    <h2 className="card-title">
                                        {foodData.foodname}
                                        <div className="badge badge-secondary text-white"> {foodData.quantity}</div>
                                    </h2>

                                    <h2 className="text-lg font-semibold">$ {foodData.price}</h2>

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