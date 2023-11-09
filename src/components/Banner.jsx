


// import required modules
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';


const Banner = () => {
  const {user} = useContext(AuthContext)
  return (
 
    <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/CM3xrpJ/Login-img.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content  text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl font-bold">Welcome to TasteBazaar</h1>
      <p className="mb-5">Where Culinary Passion Meets Seamless Management! Explore a World of Efficiency and Flavorful Excellence.</p>


      {
        user ? <Link to="/all-food-items" className='mt-5 '> <button className='btn  bg-[#f56511] hover:bg-[#f56511] text-white outline-none border-none rounded-xl hover:rounded-full'>Explore Our Products</button></Link> : <Link to="/login" className='mt-5 '> <button className='btn  bg-[#f56511] hover:bg-[#f56511] text-white outline-none border-none rounded-xl hover:rounded-full'>Join Us Today</button></Link>
      }


      {/* <Link to="/login" className='mt-5 '> <button className='btn  bg-[#f56511] hover:bg-[#f56511] text-white outline-none border-none rounded-xl hover:rounded-full'>Join Us Today</button></Link> */}
    </div>
  </div>
</div>
  );
};

export default Banner;