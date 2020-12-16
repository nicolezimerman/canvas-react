import CanvasImage from '../CanvasImage';
import CanvasText from '../CanvasText';
import CanvasSticker from '../CanvasSticker';

function Canvas(props){
    const elements = props.elements;

    return (
        <div className="canvas">
            { 
            elements.map((element,index) =>{
                switch (element.type) {
                    case 'image':
                      return <CanvasImage element={element} />;
                    case 'text':
                      return <CanvasText element={element} />;
                    case 'sticker':
                      return <CanvasSticker element={element} />;
                    default:
                      return null;
                  }
            }) 
            }
        </div>
    );
}

export default Canvas;