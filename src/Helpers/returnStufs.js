
export let isMobileView = () =>{
    if(window.innerWidth <= 768) {
        return true
    }else{
        return false
    };
};isMobileView()
console.log("mobileView ? : ", isMobileView())
export let resizeFuncObj = (/*corners*/) =>{
    let returnEdges =()=>{
        let edges = {}
        if(isMobileView() === true){
            edges = {top: false, left: false, bottom: false, right: false}
        }else{
            edges = { top: false, left: false, bottom: false, right: true }
        }
        return edges
    };
    let obj = {
        edges : {...returnEdges()},
        listeners: {
            move: function (event) {
            let { x, y } = event.target.dataset
    
            x = (parseFloat(x) || 0) + event.deltaRect.left
            y = (parseFloat(y) || 0) + event.deltaRect.top
    
            Object.assign(event.target.style, {
                width: `${event.rect.width}px`,
                height: `${event.rect.height}px`,
                transform: `translate(${x}px, ${y}px)`
            })
    
            Object.assign(event.target.dataset, { x, y })
            }
        }
    }
    return obj;
        
};


export let obsFunction =()=>{
    let editor  = document.querySelector('.edit');
    let preview = document.querySelector('.prev');
    editor.style.setProperty('boxe-sizing', 'borderBox');
    /*editor.style.width = "50vw";
    preview.style.width = "50vw";*/
    if('ResizeObserver' in window) {

        let callback = (entries, observer) =>{
            for (let entry of entries){
                //console.log("App is :", entries)
                if("borderBoxSize" in entries[0]){//method for  THE BROWSERS that supports the "borderBoxSize" 
                    let rect = entry.borderBoxSize;
                    let edSize = {
                        width : rect[0].inlineSize,
                        height : rect[0].blockSize
                    };
                    let edWidth = edSize.width;
                    //let edHeight = edSize.height;
                    let calc = `calc(100vw - ${edWidth}px)`
                    preview.style.setProperty('width', calc);
                }else if(("borderBoxSize" in entries[0] ===false) && ("contentRect" in entries[0] ===true )){// for the BROWSERS that don't support the "borderBoxSize" method, i had to includ the border manualy in the contentRect

                    let rect = entry.contentRect;
                    let edSize = {
                        width : rect.width,
                        height : rect.height
                    };
                    let edWidth = edSize.width;
                    let editorBorder = `20px`;// the width of the border of the editor, must be the same as the width defined in the CSS
                    let calc = `calc(100vw - ${edWidth}px) + ${editorBorder}`
                    preview.style.setProperty('width', calc);
                        
                }

            };
        };
        let ro = new ResizeObserver(callback);
        ro.observe(editor);
        //ro.observe(app)
    };
};


