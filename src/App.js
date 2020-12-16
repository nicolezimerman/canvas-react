import './App.css';
import {useState} from 'react';
import Sidebar from './Components/Sidebar';
import Canvas from './Components/Canvas';


function App() {
  const [elements, setElements] = useState([]);

  return (
    <>
      <div className="container">
        <Sidebar setElements={setElements}/>
        <Canvas elements={elements}/>
      </div>
      <div class="footer">Developed with ❤️ by <a href="https://nicolezimerman.github.io/"> Nicole Zimerman</a></div>
    </>
  );
}

export default App;
