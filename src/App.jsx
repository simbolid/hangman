import { useState, useEffect } from 'react';
import HangmanGraphic from './components/HangmanGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getRandomWord from './services/randomWord';

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

  useEffect(() => {
    if (display.join('') === word) {
      let newWord = getRandomWord();

      // prevent the same word from appearing twice
      while (newWord === word) {
        newWord = getRandomWord();
      }

      setWord(newWord);
      setDisplay(Array(word.length).fill('_'));
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
      <LetterTable selectLetter={selectLetter} />
    </>
  );
};

export default App;
