import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const { loginWithEmailAndPassword,googleLogin} = useContext(AuthContext);
    const locat = useLocation()
    const naviget =  useNavigate()
//    email login
    const loginEmailWithPassword = async(e) =>{
        e.preventDefault();

        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log(password,email)
        const tostLogin = toast.loading('Logging in ....')
        

        try{
            await loginWithEmailAndPassword(email,password)
            toast.success('Logged in successfully', { id: tostLogin })
            naviget(locat?.state ? locat?.state : "/")
        }
        catch (error) {
            toast.error(error.message, { id: tostLogin })
        
    }
    }
    // google login
    const googleLoginHandel = async () => {
        const tostLogin = toast.loading('Logging in ....')
        try {
            await googleLogin()
            toast.success('Logged in successfully', { id: tostLogin })
            naviget(locat?.state ? locat?.state : "/")
        }

        catch (error) {
            toast.error(error.message, { id: tostLogin })
        }
    }
    return (
        <div className="hero  min-h-[70vh] opacity-6 " style={{backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)'}}>
      <div className=" items-center justify-center m  lg:flex w-full   p-8">
        
        {/* card body */}
        <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg">

          <div className="card-body  gap-4">
          <p className="font-bold  normal-case text-3xl">Taste<span className="text-[#f56511]">Bazaar</span></p>

            <h1 className="text-4xl font-bold ">Sign in</h1>

            <p className="font-medium ">New user?
              <Link className="text-[#f56511] hover:underline ml-1" to={'/register'}>Create an account</Link>
            </p>
            <form onSubmit={loginEmailWithPassword}>
              <div className="form-control">
                <label className="label">
                  <span className=" text-sm">Email</span>
                </label>
                <input type="email" name="email" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="flex justify-end mt-6">
                <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] hover:bg-[#f55211] text-base  text-white font-semibold">Continue</button>
              </div>
            </form>
            <div className=" grid grid-cols-5 items-center justify-center my-5">
              
              <hr  className="border-[#f55211] col-span-2"/>
              
              <span className=" text-center leading-normal text-lg font-medium">Or</span>
              <hr className="border-[#f55211] col-span-2"/>
            </div>
            {/* google Sign_in */}
            <button onClick={googleLoginHandel} className="w-full gap-2   flex items-center justify-center  py-3 px-4 rounded-lg  outline outline-2 outline-[#f55211]  text-md font-semibold lg:text-xl">
              <FcGoogle size={'25'}/> <span>Google</span>
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
    );
};

export default Login;