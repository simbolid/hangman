import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './Lobby.css'

const Lobby = ({ client }) => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');

  const createRoom = () => {
    const gameId = nanoid(6);

    client.send(JSON.stringify({
        type: "createRoom",
        value: gameId
    }));

    navigate('/room', { state: gameId });
  };

  const enterRoom = () => {
    //code for what to do with the code
    console.log(roomCode);
  }

  return (
    <>
      <h1>
        Enter or Create A Room
      </h1>
      <div>
        <button onClick={() => createRoom()}>
          Create Room
        </button>
      </div>
      <div>
        <form onSubmit={() => enterRoom()}>
        <input 
          id ="code" 
          placeholder='ID of room to join' 
          value={roomCode} 
          onChange = {(e) => setRoomCode(e.target.value)}>
        </input>
        <button id = "submit" type="submit"><b><font size="+1"> Submit </font> </b></button>
        </form>
      </div>
    </>
  );
};

export default Lobby;
