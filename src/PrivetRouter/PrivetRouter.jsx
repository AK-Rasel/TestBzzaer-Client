
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";




const PrivetRouter = ({children}) => {
   
    const {user,reload} = useContext(AuthContext)
    if (reload) {
        return <div className="w-7xl h-screen flex justify-center mx-auto items-center"><span className="loading loading-spinner loading-lg  "></span></div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivetRouter;