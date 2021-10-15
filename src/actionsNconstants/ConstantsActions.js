import { isMobileView } from "../Helpers/returnStufs"
export let CLEAR_EDITOR = "CLEAR_EDITOR";
export let FULL_EDTIOR = "FULL_EDTIOR";
export let FULL_PREVIEW = "FULL_PREVIEW";
export let BOTH_VIEWS = "BOTH_VIEWS";

let calc = `calc(100vh - (25px + 3.2vw))`;
let halfCalc = `calc((100vh - (25px + 3.2vw))/2)`;
export let clearEditor = ()=>{
    return {
        type : CLEAR_EDITOR,
        playload : {edInput : ""}
    };
};

export let expandEditor = () =>{
    return{
        type : FULL_EDTIOR,
        payload : {
            edCalc  :{
                edWidth : `100vw`,
                edHeight : `${calc}`
            },
            prevCalc  :{
                prevWidth : `0vw`,
                prevHeight : `0%`
            },
            message : "Editor View Only"
        },
    }
};

export let expandPreview = ()=>{
    return{
        type : FULL_PREVIEW,
        payload : {
            edCalc  :{
                edWidth : `0vw`,
                edHeight : `0%`
            },
            prevCalc  :{
                prevWidth : `100vw`,
                prevHeight : `${calc}`
            },
            message : "Previeww View Only"
        },
    };
};

export let splitView = () =>{
    let obj ={}
if( isMobileView === true) {
    obj = {
        edCalc  :{
            edWidth : `100vw`,
            edHeight : `${halfCalc}`
        },
        prevCalc  :{
            prevWidth : `100vw`,
            prevHeight : `${halfCalc}`
        }
    }
}else{
    obj = {
        edCalc  :{
            edWidth : `50vw`,
            edHeight : `100%`
        },
        prevCalc  :{
            prevWidth : `50vw`,
            prevHeight : `100%`
        }
    }
};
    return {
        type :  BOTH_VIEWS,
        payload : { ...obj
            /*edCalc  :{
                edWidth : `50vw`,
                edHeight : `${halfCalc}`
            },
            prevCalc  :{
                prevWidth : `50vw`,
                prevHeight : `${halfCalc}`
            }*/,

            message : "Split View View"
        },
    };
};
