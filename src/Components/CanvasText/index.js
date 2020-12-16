import Draggable from '../Draggable';
import React, { useRef } from 'react';

function CanvasText(props) {
  const ref = useRef(null);
  Draggable(ref);
  const text = props.element;
    return (
      <p className="drag-item" 
      style={{zIndex:text.zindex, color:text.color , position:'absolute',top:text.top, left:text.left}}
      ref={ref}>
        {text.text}
      </p>
  );
  }
  
  export default CanvasText;