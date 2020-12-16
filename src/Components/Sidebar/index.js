import './index.css';

function Sidebar(props){
    const setElements = props.setElements;
    const elements = props.elements;
    function addImage(){
        const imgUrl = "https://cnet3.cbsistatic.com/img/gIjIQABiGRuzZUrSHbG2BgUe3Ao=/1200x630/2019/11/30/7a76bca2-defb-4311-84b7-e90638487f82/twitter-in-stream-wide-baby-yoda-soup-mandalorian.jpg";
        setElements(elements => [...elements, { type: 'image', url: imgUrl, alt:'test', width: '150px', height: '100px', zindex:getZindex(), top:getTop(), left:getLeft() }]);
    }
    function addText(){
        setElements(elements => [...elements, {type: 'text', text:'HOLA NICKY', zindex:getZindex(), color:'red', top:getTop(), left:getLeft()}]);
    }
    function addSticker(){
        setElements(elements => [...elements, {type: 'sticker',width: '150px', height: '100px', zindex:getZindex(), top:getTop(), left:getLeft(), shape: 'hamburguer'}]);
    }
    function getTop(){
        //max 512 - 100 (height)
        return Math.floor(Math.random() * (412 - 0 + 1));

    }
    function getLeft(){
        //max 320 - 150 (width)
        return Math.floor(Math.random() * (170 - 0 + 1));
    }
    function getZindex(){
        return Math.floor(Math.random() * (100 - 0 + 1))
    }

    return (
        <nav>
           <ul className="sidebar">
               <li onClick={addImage}><i class="fa fa-picture-o"></i><span>Image</span></li>
               <li onClick={addText}><i class="fa fa-font"></i><span>Text</span></li>
               <li onClick={addSticker}><i class="fa fa-smile-o"></i><span>Sticker</span></li>
           </ul>
        </nav>
    );
}

export default Sidebar;