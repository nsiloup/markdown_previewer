import React from 'react';
import marked from 'marked';
import Prism from "prismjs";
import DOMPurify from 'dompurify';
import interact from 'interactjs';
import { resizeFuncObj, obsFunction/*getSize*/ } from '../Helpers/returnStufs';
import { edInput } from '../Helpers/repo';
import persePic from "../Assets/perse2.png";

class MarkdownPrev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input : edInput,
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearEd = this.clearEd.bind(this);
        this.fullPrev = this.fullPrev.bind(this);
        this.fullEd = this.fullEd.bind(this);
        this.splitView = this.splitView.bind(this);


    };
    handleChange(event){
        this.setState({
            input : event.target.value
        })
    }
    
    clearEd(){
        this.setState({
            input : ``,
        });
        console.log("The Editor was cleared successfully !")
    };

    fullPrev(){
        this.props.toFullPrev(this.props.layoutProps);
    };
    fullEd(){
        this.props.toFullEditor(this.props.layoutProps);
    };
    splitView(){
        this.props.toBothViews(this.props.layoutProps);
        obsFunction()
    };
    componentDidMount = () =>{
        obsFunction()
    };
    render(){
        console.log("props : ", this.props)
        let {edCalc, prevCalc} = this.props.layoutProps;
        console.log(edCalc, prevCalc);


        //Markdown part Begins
        let { input } = this.state;

        let getMrkDwn = (mrkInput) =>{
            let markdFunc = marked(mrkInput,
                [
                    marked.setOptions({

                        breaks: true,
                        tables : true,
                        highlight: function (code) {
                            return Prism.highlight(code, Prism.languages.javascript, 'javascript');
                        }                        
                    }),
                    
                ]
                /*option */)
                let cleaned = DOMPurify.sanitize(markdFunc);
            return { __html : /*markdFunc*/cleaned}
        };
        //Markdown part END

        //INTERACTJS PART START

            //RESIING THE EDITOR
        interact('.edit').resizable(resizeFuncObj())
            //RESISING THE PREVIEW
        interact('.prev').resizable(resizeFuncObj())
        //INTERACTJS PART ENDS

        return(
            <div className="app-container">
                <header>
                    <div className="left-side">
                        <button onClick={this.clearEd} className="buttons">{<i class="fas fa-eraser"></i>} Clear Editor</button>
                        <button onClick={this.fullEd} className="editorOnly buttons">{<i class="fas fa-pen-square"></i>} Editor</button>
                        <button onClick={this.fullPrev} className="previewOnly buttons">{<i class="fas fa-pager"></i>} Preview</button>
                        <button onClick={this.splitView} className="splitView buttons">{<i class="fas fa-columns"></i>} Split View</button>
                    </div>
                    <div className="right-side">
                        <div className="img-container">
                            <img src={persePic} alt="Perseverance Nsilou" className="my-pic"/>
                        </div>
                    </div>
                </header>
                <div className="mark-container">
                    <textarea id="editor" onChange={this.handleChange} value={input} className="edit" style={{width:`${edCalc.edWidth}`, height:`${edCalc.edHeight}`}}/>
                    <div dangerouslySetInnerHTML = {getMrkDwn(input)} id="preview" className="prev" style={{width:`${prevCalc.prevWidth}`, height:`${prevCalc.prevHeight}`}} />
                </div>
            </div>
        )

    };
};

export default MarkdownPrev;

