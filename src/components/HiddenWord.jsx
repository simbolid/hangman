const HiddenWord = ({ display }) => {
  return (
    <h1>
      {display.map((letter, idx) => 
        <span key={idx}>
          {letter}&nbsp;
        </span> 
      )}
    </h1>
  );
}

export default HiddenWord;
