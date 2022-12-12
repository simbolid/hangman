import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Lobby = ({ client }) => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const onButtonClick = (message) => {
    client.send(JSON.stringify({
      type: "message",
      value: message
    }));
  };

  const createRoom = () => {
    const gameId = nanoid(6);

    client.send(JSON.stringify({
        type: "createRoom",
        value: gameId,
    }));

    navigate('/room', { state: gameId });
  };

  return (
    <>
      <h1>
        Enter or create game room
      </h1>
      <div>
        <button onClick={() => createRoom()}>
          Create Game Room
        </button>
        <button onClick={() => onButtonClick("Hello!")}>send button</button>
      </div>
    </>
  )
};

export default Lobby;
