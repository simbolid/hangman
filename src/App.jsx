import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HangmanGraphic from './components/HangmanGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getRandomWord from './services/randomWord';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [wrongLetters, setWrongLetters] = useState(0);
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

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
      }, 3000);
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

  return (
    <>
      <HiddenWord display={display} />
      <LetterTable selectLetter={selectLetter} refresh={refreshLetters} />
      <HangmanGraphic numWrongLetters={wrongLetters} />
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
    </>
  );
};

export default App;
