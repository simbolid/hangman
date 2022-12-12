import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  const  navigate = useNavigate();
  const[popUp, setPopUp] = useState(false);
  function handleSP() {
    setPopUp(true)
    //navigate("/sp") 
  }
  function nav(op){
    sessionStorage.setItem("LevelInfo", JSON.stringify(op));
    navigate("/sp") 
  }
  function handleMP() {
    navigate("/mp")
  }

  return (
    <div id="container">
      <div className="TitleText">
        <font size="+3"> <b> Welcome to Hangman! </b>  </font> <br /> <br /> <font size="+1"> &nbsp; &nbsp; &nbsp; &nbsp;Select your Option </font>
      </div>
      <div className="options">
        <div id="sp">
          <button className="button-30" onClick={() => handleSP()}>
            Single-Player
          </button>
          {popUp && (
              <div>
                <button id = "Ea" onClick={() => nav("E")}> Easy</button>
                <button id = "Me" onClick={() => nav("M")}> Medium</button>
                <button id = "HE" onClick={() => nav("H")}> Hard</button>
                
              </div>
            )}
        </div>
       
        <div id="mp">
          <button className="button-30" onClick={() => handleMP()}>
            Multi-Player
          </button>
        </div>
    
      </div>
    </div>
  )

}
export default HomePage;