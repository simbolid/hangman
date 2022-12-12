import { useState, useEffect } from "react";
import getWord from "../../services/randomWord";
import './style.css';

function LetterGraphics() {
  let word = getWord();
  let arrayOfWords = new Array();

  for (let i = 0; i < word.length; i++) {
    arrayOfWords.push(word.charAt(i));
  }

  console.log(arrayOfWords);

  return (
    <div>
      {word}
      <div id="word_guess">
        {arrayOfWords.map(letter =>
          <div id="guessingKeys"> _ &nbsp;</div>
        )}
      </div>
    </div>
  );
}

export default LetterGraphics;
