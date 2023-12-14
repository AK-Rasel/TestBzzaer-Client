
import Skeleton from 'react-loading-skeleton'
const GallerySkeleton = () => {
    return (
        
        <div>
        <div className=" bg-base-100 shadow-xl ">
            <figure><Skeleton className="h-60 w-full " src='' alt="" /></figure>

        </div>
    </div>
    );
};

export default GallerySkeleton;