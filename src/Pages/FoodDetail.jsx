import { useLoaderData } from "react-router-dom";


const FoodDetail = () => {
    const singleFoodData = useLoaderData()
    console.log(singleFoodData)
    return (
        <div>
            
        </div>
    );
};

export default FoodDetail;