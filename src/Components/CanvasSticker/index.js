function CanvasSticker(props) {
  const sticker = props.element;
    return (
      <img src={`'../public/${sticker.shape}.svg`} 
            alt='svg' 
            width={sticker.width} 
            height={sticker.height} 
            style={{zIndex:sticker.zindex, position: 'absolute', top:sticker.top, left:sticker.left}}/>
    );
  }
  
  export default CanvasSticker;