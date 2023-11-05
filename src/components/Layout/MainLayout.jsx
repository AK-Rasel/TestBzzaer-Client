import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";





const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;