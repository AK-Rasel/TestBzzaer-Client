import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useEffect } from "react";

import { useState } from "react";
import OrderedInformations from "../components/OrderedInformations/OrderedInformations";
import { Helmet } from "react-helmet";
// import OrderedInformations from "../components/OrderedInformations/OrderedInformations";


const MyOrderedItems = () => {
    const { user } = useContext(AuthContext)
    const [orderedInformations, setOrderedInformations] = useState([])
    const url = `http://localhost:5000/purchase/?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderedInformations(data))
    }, [])
    // console.log(orderedInformations)
    const deleteHandler = id => {
        const process = confirm('are you ure you want to delete')
        if (process) {
            fetch(`http://localhost:5000/purchase/${id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(date => {
                console.log(date)
            })
        }
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