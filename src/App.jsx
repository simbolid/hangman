import { useState, useEffect, Component} from 'react';
import HangMan from './components/hangMan/HangMan';
import LetterTable from "./components/letterTable/LetterTable";
import getWord from './services/randomWord';
import { w3cwebsocket as W3CWebSocket} from 'websocket'; 
import Search from 'antd/es/transfer/search';
import Lobby from './pages/Lobby/Lobby';

const client = new W3CWebSocket("ws://127.0.0.1:8080");
const App = () => {
  const [word, setWord] = useState('');
     // choose a random word when the app first loads
    useEffect(() => {
      const rand_word = getWord();
      setWord(rand_word);
      client.onopen = () => { 
        console.log("Connected to the Websocket client connected"); 
      };
  
      client.onmessage = (message) => {
        const dataFromServer = JSON.parse(message.data);
        console.log('got reply', dataFromServer);
      }
    }, []);  // [] tells React to only run this once
  
  return (
    <>
      <h1>{word}</h1>
      <LetterTable />
      <Lobby client={client}/>
    </>
  );
}

export default App;
