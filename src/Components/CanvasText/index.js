function CanvasText(props) {
  const text = props.element;
    return (
      <p style={{zIndex:text.zindex, color:text.color , position:'absolute',top:text.top, left:text.left}}>
        {text.text}
      </p>
  );
  }
  
  export default CanvasText;