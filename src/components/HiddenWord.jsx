import { useState, useEffect } from "react";

const HiddenWord = ({ word }) => {
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

  return (
    <h1>
      {display.map((letter) => 
        <span>{letter}&nbsp;</span> 
      )}
    </h1>
  );
}

export default HiddenWord;
