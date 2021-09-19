export let resizeFuncObj = (corners) =>{

    let obj = {
        //edges: { top: true, left: false, bottom: true, right: true },
        edges : corners,
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


export let getSize = (element)=>{
    let obj = {
        height : document.getElementById(element).offsetHeight,
        width : document.getElementById(element).offsetWidth
    };
    return obj
}


export let obsFunction =(edit, prev)=>{
    let editor  = document.querySelector(edit);
    let preview = document.querySelector(prev);
    editor.style.setProperty('boxe-sizing', 'borderBox');
    editor.style.width = "50vw";
    //preview.style.width = "50vw";
    //console.log(preview)
    //let preview = document.querySelector(prev);
    //let editorRect = {};
    if('ResizeObserver' in window) {

        /*
        const callback = (entries) =>{
            console.log(entries[0].contentRect)
        };
        
        const observer = new ResizeObserver(callback);

        const target = document.querySelector(element);
        observer.observe(element);
        */
        let callback = (entries, observer) =>{
            for (let entry of entries){
                console.log("in ientries ",entries)
                console.log(entry)
                if("borderBoxSize" in entries[0]){// MAKING SURE THAT THE BROWSER supports the "borderBoxSize" method

                    let rect = entry.borderBoxSize;
                    //let rect = entry.borderBoxSize;
    
                    //console.log("Entry is : ", rect);
                    let edSize = {
                        width : rect.width,
                        height : rect.height
                    };
                    //console.log(edSize);
                    let edWidth = edSize.width;
                    let calc = `calc(100vw - ${edWidth}px)`
                    preview.style.setProperty('width', calc);
                }else{// for the BROWSERS that don't support the "borderBoxSize" method, i had to includ the border manualy in the contentRect

                    let rect = entry.contentRect;
                    let edSize = {
                        width : rect.width,
                        height : rect.height
                    };
                    //console.log(edSize);
                    let edWidth = edSize.width;
                    let editorBorder = `20px`;// the width of the border of the editor, must be the same as the width defined in the CSS
                    let calc = `calc(100vw - ${edWidth}px) + ${editorBorder}`
                    preview.style.setProperty('width', calc);
                        
                }

            };
        };
        let ro = new ResizeObserver(callback);
        ro.observe(editor);
    };

    //console.log(preview)
};