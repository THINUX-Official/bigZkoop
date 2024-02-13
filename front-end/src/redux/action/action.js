import {ADD_TO_CART} from "./types";

export const addToCart = () => { // action creator
    console.log("Action is called!");
    return {
        type: ADD_TO_CART, // description of the action (key).
        data: "Hello THINUX"
    }
}