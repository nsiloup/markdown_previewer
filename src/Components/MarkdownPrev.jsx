import React from 'react';
//import ReactMarkdown from 'react-markdown';
//import  gfm  from 'remark-gfm';
import marked from 'marked';
import Prism from "prismjs";
import DOMPurify from 'dompurify';


class MarkdownPrev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input : ``
        };
        this.handleChange = this.handleChange.bind(this);
        //this.getMrkDwn = this.getMrkDwn.bind(this);
    };
    handleChange(event){
        this.setState({
            input : event.target.value
        })
    }
    render(){
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
                console.log(cleaned)
            return { __html : /*markdFunc*/cleaned}
        };
            
        //console.log(ReactMarkdown)
        return(
            <div>
                <textarea id="editor" onChange={this.handleChange} value={input} className="edit"/>
                {/*<ReactMarkdown remarkPlugins={[gfm]} children={input} id="preview"/>*/}
                <div dangerouslySetInnerHTML = {getMrkDwn(input)} id="preview" className="prev"/>
            </div>
        )
    };
};

export default MarkdownPrev;