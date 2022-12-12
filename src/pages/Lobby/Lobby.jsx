import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { io } from 'socket.io-client';
import "./Lobby.css"
let socket
const ENDPOINT = 'http://localhost:8081'


const Lobby = () => {


  const navigate = useNavigate();
  const [room, setRoomCode] = useState('');

   socket = io.connect(ENDPOINT)

   /* useEffect(() => { 
        const connectionOptions = {
            "forceNew" : true,
            "reconnectionAttempts": "Infinity", 
            "timeout" : 10000,                  
            "transports" : ["websocket"]
        }
        socket = io.connect(ENDPOINT, connectionOptions); 

        socket.emit('join', {room: room}, (error) => {
            if (error)
                setRoomFull(true)
        })

        return function cleanup() {
            socket.emit('disconnect')
            //shut down connnection instance
            socket.off()
        }
    }, [])*/

    const sendMessage = () => {
        socket.emit("message", {message: "Hello"})
    }


  
  const createRoom = () => {
    /*
    const gameId = nanoid(6);

    client.send(JSON.stringify({
        type: "createRoom",
        value: gameId
    }));

    navigate('/room', { state: gameId });
    */
  };


  const enterRoom = () => {
    //code for what to do with the code
   // console.log(roomCode);
  }

  return (
    <>
      <h1>
        Enter or Create A Room
      </h1>
      <div>
        <button onClick={() => sendMessage()}>sendMessage</button>
        <button onClick={() => createRoom()}>
          Create Room
        </button>
        <form onSubmit={() => enterRoom()}>
         <input 
           id ="code" 
           placeholder='ID of room to join' 
           value={123} 
           onChange = {(e) => setRoomCode(e.target.value)}>
         </input>
         </form>
      </div>
      
    </>
  );
};

export default Lobby;
