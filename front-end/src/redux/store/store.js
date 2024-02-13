import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {}; // there should be nothing in state, when project just start.
// const middleWare = [thunk]; // for api calling.

const store = createStore(
    rootReducer,
    initialState,
    compose(
        // applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;