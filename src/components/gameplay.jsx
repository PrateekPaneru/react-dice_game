import styled from "styled-components"
import { useState } from "react"






const Gameplay = () => {
  const [score,setScore] = useState(0);
  const arrNumber = [1,2,3,4,5,6];
  const [selectedNumber, setselectedNumber] =useState();

  const [currentDice , setcurrentDice] =useState(1);
  const generaterandomNumber = (min, max) => {
   
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber) return;
    const randomNumber =generaterandomNumber(1,7);
    setcurrentDice(prev => randomNumber);

   

    if(selectedNumber==randomNumber){
      setScore((prev) =>prev +randomNumber);
    }
    else{
      setScore((prev) => prev-2);
    }

    selectedNumber(undefined)
  };
  
  return ( <div>
    <div className="header">
        <div score={score}>
            <h1 className="h1">{score}</h1>
            <span className="span">Total Score</span>
        </div>
        <div className="boxesdiv"> 
            <div className="boxes" >
           
                {arrNumber.map((value,i) =>(
                 <Box
                 isSelected={value == selectedNumber}
                 key={i} onClick={() =>setselectedNumber(value)} >
                  {value}
                 </Box>
                ))}
                     
            </div>
            <span className="text2"> Select Number </span>
        </div>
    </div>
    <div className= "div2"> 
      <div onClick={rollDice}>
      <img src={`dice_${currentDice}.png`} alt="dice2"  className="img2"/>
      </div>
      <p className="text3" >Click on Dice to roll</p>
      <div className="btn3">
        <button className="reset">Reset Button</button>
        <button className="rules">Show Rules</button>
      </div>
    </div>
    </div>
  )
}

const Box = styled.div`
  width: 72px;
height: 32px;
padding: 18px 0px 18px 0px;
border: 1px 0px 0px 0px;
border: 1px solid #000000;
text-align: center;
border-radius: 3px;
font-size: 24px;

font-weight: 700;
line-height: 36px;
background-color: white;
animation: 0.4s background ease-in;
background-color: ${(props) => props.isSelected ? "black": "white"};
color: ${(props) => !props.isSelected ? "black": "white"};
`
export default Gameplay