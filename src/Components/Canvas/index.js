import CanvasImage from '../CanvasImage';
import CanvasText from '../CanvasText';
import CanvasSticker from '../CanvasSticker';


function Canvas(props){
    const elements = props.elements;
    const imgUrl = "https://cnet3.cbsistatic.com/img/gIjIQABiGRuzZUrSHbG2BgUe3Ao=/1200x630/2019/11/30/7a76bca2-defb-4311-84b7-e90638487f82/twitter-in-stream-wide-baby-yoda-soup-mandalorian.jpg";
    const image = { url: imgUrl, alt:'test', width: '150px', height: '100px', zindex:1 }
    const text = {text:'HOLA NICKY',zindex:3,color:'red'}
    const sticker = {width: '150px', height: '100px', zindex:1, shape: 'hamburguer'}
    
    
    return (
        <div className="canvas">
            { 
            elements.map(element =>{
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
            
            {/* Your code here! */}
        </div>
    );
}

export default Canvas;