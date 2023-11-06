
import Banner from "../components/Banner";

import ClientsFeedback from "../components/ClientsFeedback";

import Gallery from "../components/Gallery";
import TopFoodSection from "../components/TopFoodSection";



const Home = () => {
    return (
        <div>
            <Banner/>
            <TopFoodSection/>
            <Gallery />
            <ClientsFeedback/>
        </div>
    );
};

export default Home;