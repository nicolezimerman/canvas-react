function CanvasImage(props) {
    const image = props.element;
    return (
      <img src={image.url} 
            alt={image.alt} 
            width={image.width} 
            height={image.height} 
            style={{zIndex:image.zindex,position: 'absolute',top:image.top, left:image.left}}/>
    );
}  

export default CanvasImage;