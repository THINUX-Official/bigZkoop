import {ADD_TO_CART} from "./types";

export const addToCart = (data) => { // action creator
    console.log("Action is called!", data);
    return {
        type: ADD_TO_CART, // description of the action (key).
        data
    }
}