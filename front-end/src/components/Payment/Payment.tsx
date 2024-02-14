import {FaCcPaypal} from "react-icons/fa";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";

export const Payment = () => {
    return (
        <>
            <div className="w-full rounded shadow-lg drop-shadow-md border select-none">
                <div className="p-5">
                    <div className="border p-5">
                        <h1 className="text-gray-500">Have a coupon?</h1>

                        <div className="flex items-center p-2 ">
                            <input type="text" className="text-[11px] pl-2 h-6 rounded-l" placeholder="Coupon code"/>
                            <button className="bg-blue-400 text-white p-1 h-6 text-[11px] rounded-r">Apply</button>
                        </div>
                    </div>

                    <div className="mt-5 border text-gray-500 p-5">
                        <div className="flex items-center justify-between">
                            <h1>Total price:</h1>
                            <div className="flex items-center">
                                <h1>Rs.</h1>
                                <h1>2100.00</h1>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1>Discount:</h1>
                            <div className="flex items-center">
                                <h1>Rs.</h1>
                                <h1>2100.00</h1>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <h1>Total</h1>
                            <div className="flex items-center font-bold">
                                <h1>Rs.</h1>
                                <h1>2100.00</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center p-5 text-[30px]">
                        <button type="button"><FaCcPaypal className="mx-2"/></button>
                        <button type="button"><FaCcVisa className="mx-2"/></button>
                        <button type="button"><FaCcMastercard className="mx-2"/></button>
                    </div>
                </div>
            </div>
        </>
    );
};