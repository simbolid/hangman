import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HangmanGraphic from './components/HangManGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getRandomWord from './services/randomWord';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './App.css'
import getWord from './services/randomWord';
import { w3cwebsocket as W3CWebSocket} from 'websocket'; 
import Search from 'antd/es/transfer/search';
import Lobby from './pages/Lobby/Lobby';

const client = new W3CWebSocket("ws://127.0.0.1:8080");
const App = () => {
  let navigate = useNavigate();
  const [word, setWord] = useState(getRandomWord());
  const [wrongLetters, setWrongLetters] = useState(0);
  const [display, setDisplay] = useState(Array(word.length).fill('_'));
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0); 
  var timer;
  useEffect(() => { 
    timer = setInterval(() => { 
        setSeconds(seconds - 1);
        if(seconds === 0) {
          setLostGame(true);
          setSeconds(10)
        }
    }, 1000)
    return() => clearInterval(timer)
  });
  
  // necessary to correctly display alerts for winning/losing
  const [lostGame, setLostGame] = useState(false);

  // hack to reset LetterTable -- see https://stackoverflow.com/questions/37949981
  const [refreshLetters, doRefreshLetters] = useState(0);

  const resetGame = () => {
    let newWord;

    // prevent the same word from appearing twice
    do {
      newWord = getRandomWord();
    } while (newWord === word); 

    setLostGame(false);
    setWord(newWord);
    setDisplay(Array(newWord.length).fill('_'));
    doRefreshLetters(prev => prev + 1);
    setWrongLetters(0);
  };

  useEffect(() => {
    if (display.join('') === word && !lostGame) {
      toast.success('🦄 You got it!', {
        position: "bottom-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      resetGame();
    } 

    else if (wrongLetters === 6) {
      setLostGame(true);
    }
  }, [display]);

  useEffect(() => {
    if (lostGame) {
      toast.error('Guess limit reached!', {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setDisplay(word.split(''));

      setTimeout(() => {
        resetGame();
      }, 2000);
    }
  }, [lostGame]);

  const selectLetter = (letter) => {
    const newDisplay = [];
    let correctLetter = false;

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newDisplay.push(letter);
        correctLetter = true;
      } else {
        newDisplay.push(display[i]);
      }
    }

    setDisplay(newDisplay);

    if (!correctLetter) {
      setWrongLetters(wrongLetters + 1);
    }

    return correctLetter;
  };
  function handleBack(){
    navigate("/");
  }
  function handleStart(){

  }
  return (
    <>
    <div id = "container">
    
      <HangmanGraphic numWrongLetters={wrongLetters} id = "hGraphic"/>
      <div id = "timer">
      {minutes}:{seconds}
      </div>
      <div id = "hidden">
      <HiddenWord display={display} id = "Words" />
      </div>
      <LetterTable selectLetter={selectLetter} refresh={refreshLetters} id = "allLetters" />
     
      <ToastContainer
        position="bottom-center"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id = "buttons">
      <button id = "backButtons" onClick={ () => handleBack()}>
        Back
      </button>
      </div>
      </div>
    </>
  );
};

export default App;
