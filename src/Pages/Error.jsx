import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className=" text-center">
                <div className=" ">
                    <h1 className="text-9xl font-extrabold">4<span className="text-[#FF5100]">0</span>4</h1>
                    <h2 className="text-5xl font-bold text-[#FF5100]">Page not found...</h2>
                    <p className="py-6">we're unable to find the page your'e looking for.</p>
                    <Link  to={'/'}> <button className="btn rounded-xl text-white bg-[#FF5100]">Go to Home</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Error;