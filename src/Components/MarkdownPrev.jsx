import React from 'react';
import marked from 'marked';
import Prism from "prismjs";
import DOMPurify from 'dompurify';
import interact from 'interactjs';
import { resizeFuncObj, obsFunction/*getSize*/ } from '../Helpers/returnStufs';
import persePic from "../Assets/perse2.png"

class MarkdownPrev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input : edInput
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearEd = this.clearEd.bind(this);
    };
    handleChange(event){
        this.setState({
            input : event.target.value
        })
    }
    clearEd(){
        this.setState({
            input : ``,
        })
    };
    render(){

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
                //console.log(cleaned)
            return { __html : /*markdFunc*/cleaned}
        };
        //Markdown part END

        //INTERACTJS PART START

            //RESING THE PREVIEW
        //interact('.prev').resizable(resizeFuncObj());

            //RESIING THE EDITOR
        let editorResizeCorners =  { top: true, left: false, bottom: true, right: true };
        interact('.edit').resizable(resizeFuncObj(editorResizeCorners))
        
            //RESISING THE PREVIEW
        let previewResizeCorners = { top: false, left: false, bottom: false, right: false };
        interact('.prev').resizable(resizeFuncObj(previewResizeCorners))

        //INTERACTJS PART ENDS
        
        //let editorRect;

        let getRect =()=> {
            let timer = setTimeout(() =>{
                /*editorRect = document.querySelector(".edit").getBoundingClientRect();
                console.log(editorRect)*/
                obsFunction('.edit')
                
            }, 500)
            return () =>{
                clearTimeout(timer)
            }
        }; getRect() 
        
        //console.log(getRect())
        //EXPERIMENTAL BELLOW
        //EXPERIMENTAL ABOVE
        //obsFunction('.edit')
        return(
            <div className="app-container">
                <header>
                    <div className="left-side">
                        <button onClick={this.clearEd}>Clear Editor</button>
                    </div>
                    <div className="right-side">
                        <img src={persePic} alt="Perseverance Nsilou" className="my-pic"/>
                    </div>
                </header>
                <div className="mark-container">
                    <textarea id="editor" onChange={this.handleChange} value={input} className="edit"/>
                    <div dangerouslySetInnerHTML = {getMrkDwn(input)} id="preview" className="prev" style={{}} />
                </div>
            </div>
        )

    };
};

export default MarkdownPrev;

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