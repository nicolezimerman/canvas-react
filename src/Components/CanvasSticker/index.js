import Draggable from '../Draggable';
import React, { useRef } from 'react';

function CanvasSticker(props) {
  const ref = useRef(null);
  Draggable(ref);
  const path = "../../Images/";
  const sticker = props.element;
    return (
      <img src={`${process.env.PUBLIC_URL}/${sticker.src}.svg`} 
            alt='svg' 
            width={sticker.width} 
            height={sticker.height} 
            style={{zIndex:sticker.zindex, position: 'absolute', top:sticker.top, left:sticker.left}} className="drag-item"
            ref={ref}/>
    );
  }
  
  export default CanvasSticker;