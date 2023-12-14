import { useEffect } from "react";
import { useState } from "react";
import GallerySkeleton from "./GallerySkeleton";

const Gallery = () => {
    const [categorys, setCategorys] = useState([])
    const [skeletonLoding, setSkeletonLoding] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/all-food-items')
            .then(res => res.json())
            .then(data => {
                setCategorys(data)
                setSkeletonLoding(false)
            })
        }, 1000);
        
    }, [])

    return (
        <div className='my-16'>
            <div className='grid justify-center text-center'>
                <h1 className='lg:text-5xl text-4xl  font-extrabold'>Our Food Gallery</h1>
                <img className='lg:ml-16 ml-4 mt-5' src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2020/11/sec-title-1.png" alt="" />
            </div>


            <div className="container mx-auto justify-center">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-5  gap-10 mt-16 ">
                    
                    {skeletonLoding ? <>
                    
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    
                    </> :
                        categorys?.slice(0, 8).map(category => (
                            <div key={category._id} className="">
                                <div className=" bg-base-100 shadow-xl ">
                                    <figure><img className="h-60 w-full " src={category.foodcategoryimage} alt="Shoes" /></figure>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Gallery;