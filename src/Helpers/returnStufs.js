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
    editor.style.width = "50vw";
    //preview.style.width = "50vw";
    console.log(preview)
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
                let rect = entry.contentRect;
                //console.log("Entry is : ", rect);
                let edSize = {
                    width : rect.width,
                    height : rect.height
                };
                console.log(edSize);
                let edWidth = edSize.width;
                let calc = `calc(100vw - ${edWidth}px)`
                preview.style.setProperty('width', calc);

                //editor.style.width = 
            };
        };
        let ro = new ResizeObserver(callback);
        ro.observe(editor);
    };
    console.log(preview)
    //console.log("edit is : ",editorRect)
    //return watch;
};