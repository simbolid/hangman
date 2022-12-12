import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/transfer/search';
import './Lobby.css'
const Lobby = ({ client }) => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const onButtonClick = (message) => {
    client.send(JSON.stringify({
      type: "message",
      value: message
    }));
  };
  const handleS = (e) =>{
    //code for what to do with the code
    alert(code);
  }
  const createRoom = (id) => {

    client.send(JSON.stringify({
        type: "createRoom",
        value: id
    }))
    navigate('/room');

  };

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
        <form onSubmit={() => handleS()}>
        <input id = "code" placeholder='Ex. 1234' value={code} onChange = {(e) => setCode(e.target.value)}>
        </input>
        <button id = "submit" type="submit"><b><font size="+1"> Submit </font> </b></button>
        </form>
      </div>
    </>
  )
};

export default Lobby;
