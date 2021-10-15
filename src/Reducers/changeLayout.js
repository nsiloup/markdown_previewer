import { BOTH_VIEWS, FULL_EDTIOR, FULL_PREVIEW } from "../actionsNconstants/ConstantsActions";

let obj = {layoutProps :{
    edCalc  :{
        edWidth : `50vw`,
        edHeight : `auto`
    },
    prevCalc  :{
        prevWidth : `50vw`,
        prevHeight : `auto`
    },
message : "Default View"
}}
let initState = obj;

let changeLayoutReducer = (state = initState, action) => {
    switch(action.type) {
        case FULL_PREVIEW :
            console.log(action.payload.message)
            return {
                ...state,
                layoutProps : action.payload
            };
        case FULL_EDTIOR : 
        console.log(action.payload.message)
            return {
                ...initState,
                layoutProps : action.payload
            };
        case BOTH_VIEWS : 
        console.log(action.payload.message)
            return {
                ...initState,
                layoutProps : action.payload
            }
        default :
            return state;
    }
};

export default changeLayoutReducer;