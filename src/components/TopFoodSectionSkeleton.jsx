// import React from 'react';
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom';
const TopFoodSectionSkeleton = () => {
    return (
        <div className="card mx-8 bg-base-100 shadow-xl">

                            <Skeleton className="h-60 bg-cover" />

                            <div className="card-body">
                                <Skeleton width={50} className="badge rounded-full" />
                                <h2 className="card-title">

                                    <Skeleton width={150} className="badge  text-white" />
                                </h2>

                                <h2 className="text-lg font-semibold"></h2>

                                <Skeleton count={3} className="rating" />



                                <div className="card-actions justify-end">
                                    <Link>
                                        <Skeleton width={100} className="px-6 py-3 rounded-xl hover:bg-[#F56511] hover:rounded-full bg-[#F56511] font-Ubuntu text-white">Details</Skeleton>
                                    </Link>
                                </div>
                            </div>
                        </div>
    );
};

export default TopFoodSectionSkeleton;