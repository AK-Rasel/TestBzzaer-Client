import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useEffect } from "react";

import { useState } from "react";
import OrderedInformations from "../components/OrderedInformations/OrderedInformations";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import OrderedInformations from "../components/OrderedInformations/OrderedInformations";


const MyOrderedItems = () => {
    const { user } = useContext(AuthContext)
    const [orderedInformations, setOrderedInformations] = useState([])
    const url = `https://taste-bazaar-server.vercel.app/purchase/?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderedInformations(data))
    }, [])
    // console.log(orderedInformations)
    const deleteHandler = id => {
        
            fetch(`https://taste-bazaar-server.vercel.app/purchase/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(date => {
                console.log(date)
                if (date.deletedCount > 0) {
                    toast.success('Successfully delete!')
                    const remaining = orderedInformations.filter(orderedInformation => orderedInformation._id !== id);
                    setOrderedInformations(remaining)
                }
            })
       
    }
    
    return (
        <div className="">
             <Helmet>
                <meta charSet="utf-8" />
                <title>TasteBazaar | Ordered items</title>
            </Helmet>
            <div className="container  mx-auto ">

                <div className="overflow-x-auto ">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-base">
                                Items Name
                                </th>
                                <th className="text-base">owner</th>
                                <th className="text-base">Job</th>
                                <th className="text-base">Favorite Color</th>
                                <th className="text-base"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                orderedInformations?.map(orderedInformation => <OrderedInformations key={orderedInformation._id}
                                    orderedInformation={orderedInformation} deleteHandler= {deleteHandler} ></OrderedInformations>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrderedItems;