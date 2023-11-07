
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";





const PrivetRouter = ({children}) => {
   
    const {user,loading} = useContext(AuthContext)
    console.log(user)
    if (loading) {
        return <div className="w-7xl h-screen flex justify-center mx-auto items-center"><span className="loading loading-spinner loading-lg  "></span></div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRouter;