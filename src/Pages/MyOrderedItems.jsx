import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useEffect } from "react";

import { useState } from "react";
import OrderedInformations from "../components/OrderedInformations/OrderedInformations";
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
    console.log(orderedInformations)
    return (
        <div>
            <h1>{orderedInformations.length}</h1>
            <div className="container  mx-auto">

                <div className="overflow-x-auto">
                    <table className="table">
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
                                    orderedInformation={orderedInformation}></OrderedInformations>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrderedItems;