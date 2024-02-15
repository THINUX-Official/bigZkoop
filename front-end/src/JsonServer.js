import React, {useEffect, useState} from 'react';
import axios from "axios";

import {FaHeart} from "react-icons/fa";
import tShirt from '././view/images/products/tShirt.png';

export function JsonServer() {

    const [data, setData] = useState([]);

    let productPrice = data.price;
    // let productPrice = 1200;

    let [qty, setQty] = useState(1);
    let [price, setPrice] = useState(productPrice);

    const qtyIncrement = () => {
        setQty(qty + 1);
        setPrice(price = productPrice + price);
    }

    const qtyDecrement = () => {
        if (!(qty === 1)) {
            setQty(qty - 1);
            setPrice(price = price - productPrice);
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);

    const [isAdd, setIsAdd] = useState(false);

    const toggleIsAdd = () =>  {
        setIsAdd(!(isAdd));
    }

    return (
        <div className="font-poppins w-full h-full rounded border drop-shadow-md shadow-lg p-5">
            <table className="w-full select-none">
                <thead className="text-left">
                <tr className="text-gray-400">
                    <th>PRODUCT</th>
                    <th></th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {data.map((d, i) => {
                    return <tr key={i}>
                        {/*<td><img className="w-[100px]" src={tShirt} alt=""/></td>*/}
                        <td><img className="w-[100px]" src={d.image} alt={d.name}/></td>
                        <td>
                            <h1 className="font-bold text-[14px]">{d.name}</h1>
                            <h2 className="text-[11px] text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.</h2>
                        </td>
                        <td>
                            <div className="flex items-center">
                                <button
                                    onClick={qtyDecrement}
                                    className="bg-gray-200 px-2 rounded-full text-sm">-
                                </button>
                                <h1 className="text-[11px] font-bold mx-2 border rounded px-2">{qty}</h1>
                                <button
                                    onClick={qtyIncrement}
                                    className="bg-gray-200 px-2 rounded-full text-sm">+
                                </button>
                            </div>
                        </td>
                        <td>
                            <div className="flex text-[14px] font-bold">
                                <h1>Rs. </h1>
                                <h1>{price}</h1>
                                <h1>.00</h1>
                            </div>
                        </td>
                        <td>
                            <div className="flex">
                                <div>
                                    <button>
                                        <FaHeart
                                            onClick={toggleIsAdd}
                                            className={`mx-2 bg-white border rounded px-1 text-[25px] hover:text-red-300 ${isAdd ? 'text-red-500' : 'text-gray-300'}`}/>
                                    </button>
                                </div>
                                <div>
                                    <button className="text-gray-500 bg-white border rounded px-1">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}