import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../Auth/AuthProvider";
import { useContext, useState } from "react";

import toast from "react-hot-toast";

const Register = () => {
    const { googleLogin, createUserEmailAndPassword,UpdateProfile} = useContext(AuthContext);
    const [errorMessage,setErrorMessage] = useState('')
    const navigate = useNavigate()
    const createEmailWithPassword = async (e) => {
        e.preventDefault();

        const from = e.target
        const email = from.email.value
        const password = from.password.value
        const name = from.name.value
        const photo = from.photo.value
        if (password.length < 6) {
            setErrorMessage("Password must contain last 6 characters");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setErrorMessage("Must give an uppercase letter.");
            return;
          } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setErrorMessage("Must include a special character");
            return;
          }
        const tostLogin = toast.loading('Create an account ....')
        

        try{
            await createUserEmailAndPassword(email,password);
            UpdateProfile(name,photo)
            toast.success('Create an account successfully', { id: tostLogin })
            navigate('/')
        }
        catch (error) {
            toast.error(error.message, { id: tostLogin })
        
    }}


    const googleLoginHandel = async () => {
        const tostLogin = toast.loading('Logging in ....')
        try {
            await googleLogin()
            toast.success('Logged in successfully', { id: tostLogin })
            navigate('/')
            
        }

        catch (error) {
            toast.error(error.message, { id: tostLogin })
        }
    }

    return (
        <div className="hero  min-h-[70vh] opacity-6 " style={{ backgroundImage: 'url(https://i.ibb.co/rQGt2cf/top-view-table-full-delicious-food.jpg)' }}>
            <div className=" items-center justify-center   lg:flex w-full p-8">

                {/* card body */}
                <div className="md:w-1/2 mx-auto lg:w-1/3 max-w-6xl shadow-2xl bg-white rounded-lg hero-overlay ">

                    <div className="card-body  ">

                        <p className="font-bold   normal-case text-xl lg:text-3xl">Taste<span className="text-[#f56511]">Bazaar</span></p>

                        <h1 className=" text-3xl lg:text-4xl font-bold ">Create an account</h1>
                        {/* google Sign_in */}
                        <button onClick={googleLoginHandel} className="w-full gap-2 my-6  flex items-center justify-center  py-3 px-4 rounded-lg  outline outline-2 outline-[#f55211] text-md font-semibold lg:text-xl">
                            <FcGoogle size={'25'} /> <span>Google</span>
                        </button>
                        <div className=" grid grid-cols-5 items-center justify-center my-5">

                            <hr className="border-[#f55211] col-span-2" />

                            <span className=" text-center leading-normal text-lg font-medium">Or</span>
                            <hr className="border-[#f55211] col-span-2" />
                        </div>
                        <div className="text-start">
                            <p className="font-bold text-gray-600 text-lg">Sign up with email</p>
                            <p className="font-medium ">Already have an account?
                                <Link className="text-[#f55211] hover:underline ml-1" to={'/login'}>Sign in</Link>
                            </p>
                        </div>
                        <form onSubmit={createEmailWithPassword}>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-sm">Name</span>
                                </label>
                                <input type="name" name="name" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-sm">Email</span>
                                </label>
                                <input type="email" name="email" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className=" text-sm">Photo URL</span>
                                </label>
                                
                                <input type="url" name="photo" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="border-b px-4 h-7 text-lg text-[#f55211] border-gray-300  outline-none" required />
                                <label className="label">
                    <p href="#" className=" text-red-500 text-base font-normal  underline">{errorMessage}</p>
                  </label>
                            </div>
                            
                            <div className="flex justify-end mt-6">
                                <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] text-white hover:bg-[#f55211]  text-base font-semibold">Continue</button>
                            </div>
                        </form>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;