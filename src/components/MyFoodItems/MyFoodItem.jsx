import { useContext } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link } from 'react-router-dom';

const MyFoodItem = ({ foodItem, updateFoodHandler }) => {
    const { user } = useContext(AuthContext)
    const { _id, description, foodname, price, name, country, date, foodimage, foodcategory, quantity

    } = foodItem



    return (
        <tr>
            <th>
                <label>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <Link><button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}><GrUpdate /></button></Link>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box ">
                            <div className="  min-h-[70vh] opacity-6 " >

                                <div className=" items-center justify-center m  lg:flex w-full   p-8">

                                    {/* card body */}
                                    <div className=" w-full shadow-2xl bg-white rounded-lg">

                                        <div className="card-body  gap-4">
                                            <p className="font-bold  normal-case text-3xl "><span className="text-[#f56511]">Update food</span> item</p>
                                            <form onSubmit={() => updateFoodHandler(_id)}>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className=" text-sm">Name</span>
                                                    </label>
                                                    <input type="text" disabled defaultValue={user.displayName} name="name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className=" text-sm">Email</span>
                                                    </label>
                                                    <input disabled type="email" name="email" defaultValue={user.email} className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className=" text-sm">Food Image Url</span>
                                                    </label>
                                                    <input type="url" defaultValue={foodimage} name="foodimage" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Food Name</span>
                                                    </label>
                                                    <input type="text" defaultValue={foodname} name="food_name" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Food Category</span>
                                                    </label>
                                                    <input type="text" defaultValue={foodcategory

                                                    } name="food_category" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Price</span>
                                                    </label>
                                                    <input type="number" placeholder="$" name="price" defaultValue={price} className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Quantity</span>
                                                    </label>
                                                    <input type="number " defaultValue={quantity} name="quantity" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Food Origin</span>
                                                    </label>
                                                    <input type="text" defaultValue={country} name="food_origin" className="border-b px-4 h-7 text-lg  border-gray-300  outline-none" required />

                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Description</span>
                                                    </label>
                                                    <textarea defaultValue={description} rows="10" type="text" name="description" wrap="hard" className="border-b px-4 h-20   border-gray-300 text-base outline-none" required />

                                                </div>
                                                <div className="flex justify-end mt-6">
                                                    <button className=" w-full py-3 px-4 rounded-lg bg-[#f56511] hover:bg-[#f55211] text-base  text-white font-semibold">Update</button>
                                                </div>
                                            </form>


                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={foodimage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodname}</div>
                        
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />

            </td>
            <td>{'$' + price}</td>

        </tr>
    );
};

export default MyFoodItem;