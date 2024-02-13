import {ADD_TO_CART} from "../action/types";

export const cartData =  (data = [], action) =>  {
    switch (action.type) {
        case ADD_TO_CART:
            return action.data;
            break;
        default:
            return "No Action Called";
    }
}
