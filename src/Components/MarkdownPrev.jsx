import React from 'react';
//import ReactMarkdown from 'react-markdown';
//import  gfm  from 'remark-gfm';
import marked from 'marked';

class MarkdownPrev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input : ``
        };
        this.handleChange = this.handleChange.bind(this);
        this.getMrkDwn = this.getMrkDwn.bind(this);
    };
    handleChange(event){
        this.setState({
            input : event.target.value
        })
    }
    getMrkDwn = (mrkInput) =>{
        return { __html : marked(mrkInput, /*option */)}
    };
    render(){
        let { input } = this.state;
        //console.log(ReactMarkdown)
        return(
            <div>
                <textarea id="editor" onChange={this.handleChange} value={input} />
                {/*<ReactMarkdown remarkPlugins={[gfm]} children={input} id="preview"/>*/}
                <div dangerouslySetInnerHTML = {this.getMrkDwn(input)} />
            </div>
        )
    };
};

export default MarkdownPrev;