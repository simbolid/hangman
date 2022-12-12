import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/transfer/search';

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
    navigate('/room');
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
        {user ?
          <button onClick={() => onButtonClick("Hello!")}>send button</button>
          :
          <div style={{ padding: '200px 40px' }}>
            <Search
              placeholder='Enter Game'
              size="large"
              onSearch={() => onButtonClick("Login")}
            />
          </div>
        }
      </div>
    </>
  )
};

export default Lobby;
