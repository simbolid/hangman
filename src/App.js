import { useState, useEffect } from 'react';
import getWord from './services/randomWord';

const App = () => {
  const [word, setWord] = useState('');

  // choose a random word when the app first loads
  useEffect(() => {
    const rand_word = getWord();
    setWord(rand_word);
  }, []);  // [] tells React to only run this once

  return (
    <h1>{word}</h1>
  );
}

export default App;
