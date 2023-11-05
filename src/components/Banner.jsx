// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:h-[80vh]    "
      >
        <div className='relative'>
          
          <SwiperSlide><div>
          <div className=' tracking-wide  z-10 absolute top-1/3 left-0 right-1/2 translate-x-1/4 bottom-0'><div><h1 className=' mb-6  lg:text-6xl  text-4xl font-Montserrat font-extrabold  text-white'>2024 Toyota <br /> <span>Land Cruiser</span></h1> <p className='  text-[#F0C543] text-lg uppercase tracking-widest font-semibold'>Caming Soon ...</p></div></div>
            <img className=' object-cover h-[80vh] w-full   ' src="https://i.ibb.co/KFBTyJW/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay.jpg" alt="" />
           
          </div></SwiperSlide>

          <SwiperSlide>
            <div>
          <div className=' tracking-wide  z-10 absolute top-1/3 left-0 right-1/2 translate-x-1/4 bottom-0'><div>
            <h1 className=' mb-6 text-4xl lg:text-6xl font-Montserrat font-extrabold  text-white'>2023 BMW <span>ix </span></h1> <p className='  text-[#F0C543] text-lg uppercase tracking-widest font-semibold'>Now available have <span>now ...</span></p></div></div>
          <img className=' bg-cover  w-full h-[80vh] lg:h-full  ' src="https://i.ibb.co/CM3xrpJ/Login-img.jpg" alt="" />
            </div></SwiperSlide>
        </div>

        
        
        

      </Swiper>
    </div>
  );
};

export default Banner;