import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
  const  navigate = useNavigate();

  function handleSP() {
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