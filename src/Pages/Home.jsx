
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";

import ClientsFeedback from "../components/ClientsFeedback";

import Gallery from "../components/Gallery";
import TopFoodSection from "../components/TopFoodSection";



const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TasteBazaar | Home</title>
            </Helmet>
            <Banner />
            <TopFoodSection />
            <Gallery />
            <ClientsFeedback />
        </div>
    );
};

export default Home;