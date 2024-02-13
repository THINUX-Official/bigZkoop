import {AllPostReducer} from './reducer-AllPost';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    allPost: AllPostReducer,
});

export default rootReducer;