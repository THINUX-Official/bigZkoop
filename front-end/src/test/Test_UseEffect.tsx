import React, {useState, useEffect} from "react";

export const Test_UseEffect = () => {

    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (!(count === 0)) {
            setCount(count - 1);
        }
    }

    useEffect(() => { // useEffect act like as a side effect.

        console.log(`New count is ${count}`);

    }, [count]); // dependency array. At least execute one time without the dependency array.

    return (
        <>
            <div>
                <div className="flex flex-col justify-center items-center w-screen h-screen">
                    <h1>Use State</h1>
                    <p>The count is {count}</p>

                    <div className="inline-flex">
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                onClick={decrement}>
                            -
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                onClick={increment}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};