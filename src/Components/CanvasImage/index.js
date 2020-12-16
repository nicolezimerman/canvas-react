import Draggable from '../Draggable';
import React, { useRef } from 'react';

const CanvasImage = (props) => {
    const ref = useRef(null);
    Draggable(ref);
    const image = props.element;
    return (
      <img src={image.url} 
            alt={image.alt} 
            width={image.width} 
            height={image.height} 
            style={{zIndex:image.zindex,position: 'absolute',top:image.top, left:image.left}} 
            className="drag-item"
            ref={ref} />
    );
}  

export default CanvasImage;