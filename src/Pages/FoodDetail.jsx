import { Link, useLoaderData,  } from "react-router-dom";


const FoodDetail = () => {
    const singleFoodData = useLoaderData()
    

    // const { id } = useParams()

    // const singleFoodDetail = singleFoodData.find(singleFoodDataDetail => singleFoodDataDetail._id == id)
    const { _id,FoodName, FoodImage, FoodCategory, Price, Rating, Quantity, Description, Count, Country

    } = singleFoodData

    // console.log(singleFoodDetail)
    return (
        <div className="flex justify-center min-h-[60vh]  ">
            <div className="hero-content flex-col lg:flex-row flex-1 ">
                <img src={FoodImage} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex-1 ml-4 ">
                    <h1 className="text-3xl font-medium ">{FoodCategory}</h1>
                    <h1 className="text-5xl font-bold font-Ubuntu">{FoodName}</h1>
                    <p className="py-5 text-3xl font-Ubuntu font-bold text-[#F56511]">Price : ${Price}</p>
                    <p className="text-lg">Made by who add</p>
                    <p className="text-lg">Food Origin : <span className="font-light ">{Country}</span></p>
                    <p className="text-lg  font-Ubuntu">{Description}</p>
                    <Link to={`/purchase/${_id}`} className="grid justify-center lg:justify-end">
                    <button className="  px-4 font-Ubuntu text-white btn my-4  rounded-xl hover:bg-[#F56511] hover:rounded-full bg-[#F56511]">Purchase Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default FoodDetail;