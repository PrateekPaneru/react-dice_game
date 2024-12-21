
const Startgame = ({toggle}) => {
  return (
    <div className="base">
        <div>
        <img src="maindice.png" alt="dice photo" className="img1" />
        </div>
        <div className="text">
            <h1> DICE GAME</h1>
            <button className="btn1" onClick={toggle}>PLAY NOW</button>
        </div>
    </div>
  )
}
export default Startgame;