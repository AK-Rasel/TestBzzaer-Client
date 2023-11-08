// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}

        autoplay={{
          delay: 8000,
          disableOnInteraction: false,

        }}
        // pagination={{
        //   clickable: true,
        // }}
        
        navigation={true}
        modules={[ Autoplay,Pagination, Navigation]}
        className="mySwiper  lg:h-[80vh]    "
      >
        <div className='relative'>
          <SwiperSlide><div >
          <img className=' object-cover h-[80vh] w-full   ' src="https://i.ibb.co/CM3xrpJ/Login-img.jpg" alt="" />
            <div className='max-w-7xlxl    z-10 absolute top-1/3 inset-0 left-0 right-0 translate-x-1/4 bottom-0'><div><h1 className=' mb-6 w-1/2  lg:text-6xl  text-4xl font-Montserrat font-extrabold  text-white'>Welcome to <span>TasteBazaar</span></h1> <p className='  text-white mb-3 lg:text-lg lg:text-center  lg:font-semibold lg:w-1/3 w-1/2  '>Where Culinary Passion Meets Seamless Management! Explore a World of Efficiency and Flavorful Excellence.</p>
            <Link to="/login" className='lg:flex lg:justify-center lg:w-2/6 mt-5 '> <button className='btn  bg-[#f56511] hover:bg-[#f56511] text-white outline-none border-none rounded-xl hover:rounded-full'>Join Us Today</button></Link>
            </div>
            
            </div>
            

          </div></SwiperSlide>


          <SwiperSlide><div >
            <div className=' font-Ubuntu space-y-1 tracking-wide  z-10 absolute top-1/3 left-0 right-1/2 translate-x-1/4 bottom-0'><div><h1 className=' mb-6  lg:text-6xl  text-3xl font-Montserrat font-extrabold  text-white'>Welcome to <br /> <span>TasteBazaar</span></h1> 
            <Link to={'/all-food-items'}> <button className='btn  bg-[#f56511] hover:bg-[#f56511] text-white outline-none border-none rounded-xl hover:rounded-full mt-4'>Explore Menu</button></Link>
            </div></div>
            <img className=' object-cover h-[80vh] w-full   ' src="https://i.ibb.co/KFBTyJW/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg" alt="" />

          </div></SwiperSlide>



        </div>





      </Swiper>
    </div>
  );
};

export default Banner;