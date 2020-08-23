import React from 'react';

const backgroundChanger = ProspectiveComponent => {
    const color =['red', 'blue', 'green', 'yellow', 'purple', 'violet'];
    const randomColor = color[Math.floor(Math.random() * 5)];
    const randomColor1 = color[Math.floor(Math.random() * 6)];
    
    const className=randomColor1+"-text";
    
    return (props) => {
        return(
           <div className={className} style={{backgroundColor:randomColor}}>
                <ProspectiveComponent {...props} />
           </div> 
        )
    }
}

export default backgroundChanger;