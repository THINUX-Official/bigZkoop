import {Product} from "../Product/Product";
import {Payment} from "../Payment/Payment";

export const MainContent = () => {
    return (
        <>
            <div className="flex items-center w-full min-h-svh p-2">
                <div className="w-[60%] mx-1">
                    <Product/>
                </div>

                <div className="w-[40%] mx-1">
                    <Payment/>
                </div>
            </div>
        </>
    );
};