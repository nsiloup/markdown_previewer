import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/rootReducers";
//import { isMobileView } from "./Helpers/returnStufs"

/*let ret ;
if ( isMobileView() === true ){
    ret = {
        edWidth : `100vw`,
        prevWidth : `0vw`
    }
}else{
    ret = {
        edWidth : `50vw`,
        prevWidth : `50vw`,
    }
}*/

let store = createStore(rootReducer,/*{changeLayoutReducer : ret},*/ applyMiddleware(thunk));
export default store;

console.log(store.getState());