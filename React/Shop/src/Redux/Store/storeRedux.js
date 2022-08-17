import { createStore, applyMiddleware, compose } from "redux";
import RootReducers from "./../Reducer/RootReducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const storeRedux = createStore(RootReducers, middleware);

export default storeRedux;
