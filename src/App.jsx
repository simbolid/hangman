import { useState, useEffect } from 'react';
import HangmanGraphic from './components/HangmanGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getWord from './services/randomWord';

const App = () => {
  const [word, setWord] = useState(getWord().toUpperCase());
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

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
