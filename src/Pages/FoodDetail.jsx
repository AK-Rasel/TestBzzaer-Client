import { useLoaderData, useParams } from "react-router-dom";


const FoodDetail = () => {
    const singleFoodData = useLoaderData()

    const {id} = useParams() 

    const singleFoodDetail = singleFoodData.find(singleFoodDataDetail => singleFoodDataDetail._id == id)

    // console.log(singleFoodDetail)
    return (
        <div>
            <h2>{singleFoodDetail.FoodName}</h2>
        </div>
    );
};

export default FoodDetail;