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
            //toggleView : false,
        };
        /*
        this.handleChange = this.handleChange.bind(this);
        this.clearEd = this.clearEd.bind(this);
        this.fullEd = this.fullEd.bind(this);
        this.fullEd = this.fullEd.bind(this);
        */
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
        /*let {layoutProps} = this.props;
        console.log("layOut :",layoutProps);*/
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

        /*
        let getRect =()=> {
            let timer = setTimeout(() =>{
                obsFunction()
                
            }, 500)
            return () =>{
                clearTimeout(timer)
            }
        }; getRect()
        */ 
        //let {editorWidth, previewWidth, messageSystem } = this.props;
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

/*
let edInput =  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
*/