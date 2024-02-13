import {addToCart} from '../../redux/action/action'
import {useDispatch} from 'react-redux';

export const Test = () => {

    const product = {
        name: "T-Shirt",
        price: "1200.00",
        brand: "THINUX",
        quantity: "10"
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <div>
                    <button
                        className="select-none bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                        onClick={() => dispatch(addToCart(product))}
                    >CLICK ME!
                    </button>
                </div>
            </div>
        </>
    );
};
