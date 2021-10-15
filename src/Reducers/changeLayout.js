import { BOTH_VIEWS, FULL_EDTIOR, FULL_PREVIEW } from "../actionsNconstants/ConstantsActions";

//let initState = splitView().playload;
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
                /*layoutProps :{
                    edWidth : action.payload.edWidth,
                    prevWidth : action.payload.prevWidth,
                    message : action.payload.message
                }*/
            };
        case FULL_EDTIOR : 
        console.log(action.payload.message)
            return {
                ...initState,
                layoutProps : action.payload
                /*
                layoutProps : {
                    edWidth : action.payload.edWidth,
                    prevWidth : action.payload.prevWidth,
                    message : action.payload.message
                }*/
            };
        case BOTH_VIEWS : 
        console.log(action.payload.message)
            return {
                ...initState,
                layoutProps : action.payload
                /*layoutProps : {
                    edWidth : action.payload.edWidth,
                    prevWidth : action.payload.prevWidth,
                    message : action.payload.message
                }*/
            }
        default :
            return state;
    }
};

export default changeLayoutReducer;