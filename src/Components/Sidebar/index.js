import './index.css';

function Sidebar(props){
    const setElements = props.setElements;
    const images = ["https://cnet3.cbsistatic.com/img/gIjIQABiGRuzZUrSHbG2BgUe3Ao=/1200x630/2019/11/30/7a76bca2-defb-4311-84b7-e90638487f82/twitter-in-stream-wide-baby-yoda-soup-mandalorian.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg",
                "https://hipertextual.com/files/2017/02/imagen_17117_social.jpg",
                "https://img.huffingtonpost.com/asset/5df90759240000d80c5a3933.jpeg?ops=scalefit_720_noupscale",
                "https://img2.rtve.es/v/5569493?w=1600&preview=1588601188371.jpg"];
    const templateText = ["The Force will be with you. Always",
                            "Never tell me the odds!",
                            "Do. Or do not. There is no try",
                            "There’s always a bigger fish",
                            "Power! Unlimited power!",
                            "May the force be with you"];
    const stickers = ["babyyoda","darthvader","princessleia","rab"];
    const colors = ["red","black","orange","blue","green","pink","violet"];

    function addImage(){
        setElements(elements => [...elements, { type: 'image', url: getRandomImg(), alt:'test', width: '150px', height: '100px', zindex:getZindex(), top:getTop(), left:getLeft() }]);
    }
    function addText(){
        setElements(elements => [...elements, {type: 'text', text:getRandomText(), zindex:getZindex(), color:getRandomColor(), top:getTop(), left:getLeft()}]);
    }
    function addSticker(){
        setElements(elements => [...elements, {type: 'sticker', width: '150px', height: '100px', zindex:getZindex(), top:getTop(), left:getLeft(), src: getRandomSticker()}]);
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

    function getRandomImg() {
        return images[Math.floor(Math.random() * images.length)];
    }

    function getRandomText() {
        return templateText[Math.floor(Math.random() * templateText.length)];
    }

    function getRandomSticker() {
        return stickers[Math.floor(Math.random() * stickers.length)];
    }
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <nav>
           <ul className="sidebar">
               <li onClick={addImage}><i className="fa fa-picture-o"></i><span>Image</span></li>
               <li onClick={addText}><i className="fa fa-font"></i><span>Text</span></li>
               <li onClick={addSticker}><i className="fa fa-smile-o"></i><span>Sticker</span></li>
           </ul>
        </nav>
    );
}

export default Sidebar;