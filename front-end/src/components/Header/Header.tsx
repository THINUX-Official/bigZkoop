import logo from '../../view/images/logo.png'
import {FaCartPlus} from "react-icons/fa6";
import {IoSearch} from "react-icons/io5";
import {useState} from "react";

import {FcManager} from "react-icons/fc";


export const Header = () => {

    let [cartNumber, setCartNumber] = useState(0);

    return (
        <>
            <div className="bg-cyan-400 w-full h-[50px] flex justify-between items-center select-none">
                <div>
                    <img className="w-auto h-6 cursor-pointer" src={logo} alt="logo"/>
                </div>

                <div className="flex items-center">
                    <input className="rounded-l h-7 w-[50vw] text-[11px] pl-2" type="text"
                           placeholder="Search Product"/>
                    <div className="bg-blue-500 hover:bg-blue-600 p-1 rounded-r h-7">
                        <IoSearch className="text-white pt-1"/>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="flex mr-10">
                        <FaCartPlus className="text-white text-[25px]"/>
                        <span className="bg-red-500 text-white text-[11px] px-1 mb-2 rounded-full">0</span>
                    </div>

                    <div className="flex items-center justify-center">
                        <FcManager className="text-[30px] bg-white bg-opacity-50 rounded-full"/>
                        <div className="flex flex-col">
                            <h1 className="text-white font-bold text-[11px] px-1">Welcome</h1>
                            <div className="flex">
                                <button type="button"
                                        className="text-white font-bold text-[11px] px-1 hover:bg-white hover:bg-opacity-50 rounded">Sign
                                    In
                                </button>
                                <h1 className="text-white font-bold text-[11px] px-1">|</h1>
                                <button type="button"
                                        className="text-white font-bold text-[11px] px-1 hover:bg-white hover:bg-opacity-50 rounded">Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};