import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';

// const initialState = {}; // there should be nothing in state, when project just start.
// const middleWare = [thunk]; // for api calling.

const store = createStore(
    rootReducer,
    // initialState,
);

export default store;