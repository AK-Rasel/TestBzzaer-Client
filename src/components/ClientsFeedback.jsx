import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";


const ClientsFeedback = () => {

    const [clientsFeedbacks, setclientsFeedbacks] = useState([])
    useEffect(() => {
        fetch('/json.json')
            .then(res => res.json())
            .then(data => setclientsFeedbacks(data))
    }, [])
    console.log(clientsFeedbacks)
    const settings = {

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div >
            <div className='grid justify-center text-center my-16'> 
                <h1 className='lg:text-5xl text-4xl  font-extrabold'>Clients Feedback</h1>
                <img className=' mt-5 w-10/12 lg:w-full' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />
            </div>
            <Slider {...settings} className="h-full">
            {
                clientsFeedbacks.map(clientsFeedback => (<div key={clientsFeedback.index} className="mb-10">
                    <div className=" w-full">
                        <div className="card rounded-xl lg:w-2/6 mx-auto  mb-10   m-10 p-5">
                            <div className="avatar grid justify-center">
                                <div className="w-24 rounded-full">
                                    <img src={clientsFeedback.img} />
                                </div>
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{clientsFeedback.name}</h2>
                                <p >{clientsFeedback.description}</p>
                                <div className="card-actions">
                                    <div className="rating rating-md">
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#F56511]" checked />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#F56511]" />
                                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-[#F56511]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                ))
            }
        </Slider>
        </div>
    );
};

export default ClientsFeedback;