import { useState, useEffect } from 'react';
import HangmanGraphic from './components/HangmanGraphic';
import HiddenWord from './components/HiddenWord';
import LetterTable from './components/LetterTable';
import getWord from './services/randomWord';

const App = () => {
  const [word, setWord] = useState(getWord());

  return (
    <>
      <HiddenWord word={word}/>
      <LetterTable />
    </>
  );
};

export default App;
