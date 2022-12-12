import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HangmanGraphic from './components/HangmanGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getRandomWord from './services/randomWord';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

  // hack to reset LetterTable -- see https://stackoverflow.com/questions/37949981
  const [refreshLetters, doRefreshLetters] = useState(0);

  useEffect(() => {
    if (display.join('') === word) {
      let newWord = getRandomWord();

      // prevent the same word from appearing twice
      while (newWord === word) {
        newWord = getRandomWord();
      }

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

      setWord(newWord);
      setDisplay(Array(newWord.length).fill('_'));
      doRefreshLetters(prev => prev + 1);
    }
  }, [display]);

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

    return correctLetter;
  };

  return (
    <>
      <HiddenWord display={display} />
      <LetterTable selectLetter={selectLetter} refresh={refreshLetters} />
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
