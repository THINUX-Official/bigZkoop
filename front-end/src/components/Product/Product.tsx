import tShirt from '../../view/images/products/tShirt.png';

import {FaHeart} from "react-icons/fa";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

export const Product = () => {

    let tShirtPrice = 1200;

    let [qty, setQty] = useState(0);
    let [price, setPrice] = useState(tShirtPrice);

    const qtyIncrement = () => {
        setQty(qty + 1);
        setPrice(price = price + 1200.00);
    }

    const qtyDecrement = () => {
        if (!(qty === 0)) {
            setQty(qty - 1);
            setPrice(price = price - 1200.00);
        }
    }

    return (
        <>
            <div>
                <div className="font-poppins w-full h-full rounded">
                    <table className="w-full drop-shadow-md shadow-lg border select-none">
                        <thead className="text-left">
                        <tr className="text-gray-400">
                            <th>PRODUCT</th>
                            <th></th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className="">
                        <tr>
                            <td><img className="w-[100px]" src={tShirt} alt=""/></td>
                            <td>
                                <h1 className="font-bold text-[14px]">T-Shirt</h1>
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
                                                className="text-gray-300 mx-2 bg-white border rounded px-1 text-[25px]"/>
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

                        <tr>
                            <td><img className="w-[100px]" src={tShirt} alt=""/></td>
                            <td>
                                <h1 className="font-bold text-[14px]">T-Shirt</h1>
                                <h2 className="text-[11px] text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</h2>
                            </td>
                            <td>
                                <div className="flex items-center mr-3">
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">-</button>
                                    <h1 className="text-[11px] font-bold mx-2 border rounded px-2">0</h1>
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">+</button>
                                </div>
                            </td>
                            <td>
                                <div className="flex text-[14px] font-bold">
                                    <h1>Rs. </h1>
                                    <h1>1200.00</h1>
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <div>
                                        <button>
                                            <FaHeart
                                                className="text-gray-300 mx-2 bg-white border rounded px-1 text-[25px]"/>
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

                        <tr>
                            <td><img className="w-[100px]" src={tShirt} alt=""/></td>
                            <td>
                                <h1 className="font-bold text-[14px]">T-Shirt</h1>
                                <h2 className="text-[11px] text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</h2>
                            </td>
                            <td>
                                <div className="flex items-center mr-3">
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">-</button>
                                    <h1 className="text-[11px] font-bold mx-2 border rounded px-2">0</h1>
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">+</button>
                                </div>
                            </td>
                            <td>
                                <div className="flex text-[14px] font-bold">
                                    <h1>Rs. </h1>
                                    <h1>1200.00</h1>
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <div>
                                        <button>
                                            <FaHeart
                                                className="text-gray-300 mx-2 bg-white border rounded px-1 text-[25px]"/>
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

                        <tr>
                            <td><img className="w-[100px]" src={tShirt} alt=""/></td>
                            <td>
                                <h1 className="font-bold text-[14px]">T-Shirt</h1>
                                <h2 className="text-[11px] text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</h2>
                            </td>
                            <td>
                                <div className="flex items-center mr-3">
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">-</button>
                                    <h1 className="text-[11px] font-bold mx-2 border rounded px-2">0</h1>
                                    <button className="bg-gray-200 px-2 rounded-full text-sm">+</button>
                                </div>
                            </td>
                            <td>
                                <div className="flex text-[14px] font-bold">
                                    <h1>Rs. </h1>
                                    <h1>1200.00</h1>
                                </div>
                            </td>
                            <td>
                                <div className="flex">
                                    <div>
                                        <button>
                                            <FaHeart
                                                className="text-gray-300 mx-2 bg-white border rounded px-1 text-[25px]"/>
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


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};