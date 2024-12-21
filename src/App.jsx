import Startgame from "./components/startgame";
import './App.css';
import { useState } from "react";
import Gameplay from "./components/gameplay";


function App() {

     const [gamestart,setgameStart] = useState(false);

     const togglegame = () => {

      setgameStart((prev) => !prev);
     } 

  return   (
    <>
    {
      gamestart ? <Gameplay/> : <Startgame
      toggle={togglegame} />
    }
      
    </>
  );
    
}

export default App
