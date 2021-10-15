import { connect } from "react-redux";
import MarkdownPrev from "../Components/MarkdownPrev";
import { expandPreview, expandEditor, splitView} from '../actionsNconstants/ConstantsActions';



/*export class  MarkdownBridge extends React.Component {
    render(){
        return (
            <MarkdownPrev/>
        )
    }
};*/

let mapStateToProps = (state)=>{
    return {
        /*editorWidth : state.changeLayoutReducer.edWidth,
        previewWidth : state.changeLayoutReducer.prevWidth,
        messageSystem : state.changeLayoutReducer.message*/
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