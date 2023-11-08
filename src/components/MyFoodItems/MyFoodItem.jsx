

const MyFoodItem = ({foodItem}) => {
    const { _id, foodname, price, name, country, date, foodimage } = foodItem
    return (
        <tr>
           
            <th>
                <label>
                    <button className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
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
                        <div className="text-sm opacity-50">{'$' + price}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />

            </td>
            <td>{date}</td>
            
        </tr>
    );
};

export default MyFoodItem;