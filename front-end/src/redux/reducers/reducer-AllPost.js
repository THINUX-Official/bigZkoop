import {ADD_TO_CART} from "../action/types";

export default function (state = null, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return action.data;
            break;
    }
    return state;
}