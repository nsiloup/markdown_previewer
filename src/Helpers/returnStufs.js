export let resizeFuncObj = () =>{

    let obj = {
        edges: { top: true, left: true, bottom: true, right: true },
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


