import { connect } from "react-redux";
import MarkdownPrev from "../Components/MarkdownPrev";
import { expandPreview, expandEditor, splitView} from '../actionsNconstants/ConstantsActions';




let mapStateToProps = (state)=>{
    return {
        layoutProps : state.changeLayoutReducer.layoutProps
    };
};
let mapDispatchToProps = (dispatch) =>{
    return{
        toFullPrev : () =>{
            dispatch(expandPreview())
        },
        toFullEditor : ()=>{
            dispatch(expandEditor())
        },
        toBothViews : ()=>{
            dispatch(splitView())
        }
    }
};
let  Container = connect(mapStateToProps, mapDispatchToProps)(MarkdownPrev);

export default Container; 