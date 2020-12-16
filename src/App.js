import './App.css';
import {useState} from 'react';
import Sidebar from './Components/Sidebar';
import Canvas from './Components/Canvas';


function App() {
  const [elements, setElements] = useState([]);

  return (
    <>
      <Sidebar elements={elements} setElements={setElements}/>
      <Canvas elements={elements}/>
    </>
  );
}

export default App;
