import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HangmanGraphic from './components/HangManGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getRandomWord from './services/randomWord';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './App.css'

function helper() {
  let level = JSON.parse(sessionStorage.getItem("LevelInfo"));
  if (level === "E") {
    return 90;
  }
  if (level === "M") {
    return 45;
  }
  if (level === "H") {
    return 25;
  }
}

const App = () => {
  let navigate = useNavigate();
  const [word, setWord] = useState(getRandomWord());
  const [wrongLetters, setWrongLetters] = useState(0);
  const [display, setDisplay] = useState(Array(word.length).fill('_'));
  const [seconds, setSeconds] = useState(helper());
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setLostGame(true);
        setSeconds(helper())
      }
    }, 1000)
    return () => clearInterval(timer)
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
    setSeconds(helper());
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
      setSeconds(helper());
      toast.error('Sorry, you lost :(', {
        position: "bottom-center",
        autoClose: 2500,
        // hideProgressBar: true,
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

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <div id="container">
        <HangmanGraphic numWrongLetters={wrongLetters} id="hGraphic" />
        <div id="timer">
          Timer: {seconds}s
        </div>
        <div id="hidden">
          <HiddenWord display={display} id="Words" />
        </div>
        <LetterTable selectLetter={selectLetter} refresh={refreshLetters} id="allLetters" />
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
        <div id="buttons">
          <button id="backButtons" onClick={() => handleBack()}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default App;