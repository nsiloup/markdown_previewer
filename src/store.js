import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducers";

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

console.log(store.getState());