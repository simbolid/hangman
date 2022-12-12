import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HangmanGraphic from '../../components/HangManGraphic';
import HiddenWord from '../../components/HiddenWord';
import LetterTable from '../../components/LetterTable';
import getRandomWord from '../../services/randomWord';
import LeaderBoard from '../../components/LeaderBoard';
import './multiplayer.css'

export default function Multiplayer({ socket, username, room }) {
  const [word, setWord] = useState(getRandomWord());
  const [wrongLetters, setWrongLetters] = useState(0);
  const [display, setDisplay] = useState(Array(word.length).fill('_'));

  const [leaderBoard, getLeaderBoard] = useState([]);



  // necessary to correctly display alerts for winning/losing
  const [lostGame, setLostGame] = useState(false);

  // hack to reset LetterTable -- see https://stackoverflow.com/questions/37949981
  const [refreshLetters, doRefreshLetters] = useState(0);

  const navigate = useNavigate();

  // notify server you won 
  const sendWonGame = async () => {
    const data = {
      room: room,
      author: username,
      message: "I won the game",
    }

    await socket.emit('won_game', data);
  };

  // notify you when other player won
  useEffect(() => {
    socket.on("other_player_won", () => {
      setLostGame(true);
    });
  }, [socket]);

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

  // check if you won or lost
  useEffect(() => {
    if (display.join('') === word && !lostGame) {
      sendWonGame();

      toast.success('Congrats, you won!', {
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

  // show the word when you lose
  useEffect(() => {
    if (lostGame) {
      toast.error('Sorry, you lost!', {
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
      <div id="containerMultiplayer">
        <div className='left'>
          <LeaderBoard/>
        </div>
          <div className='right'>
          <HangmanGraphic numWrongLetters={wrongLetters} id="hGraphic" />
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

        </div>
    
        
        <div id="buttons">
          <button id="backButtons" onClick={() => handleBack()}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}
