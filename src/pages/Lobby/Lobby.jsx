import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import "./Lobby.css"


const Lobby = ({socket}) => {


 const navigate = useNavigate();
 const [room, setRoom] = useState('')

  const creatRoom = ()=>{
    /*
    const roomId = nanoid(6);
    setRoom(roomId)

    if (room != ''){
        socket.emit("joinroom", room)
    }
    navigate('/room', { state: roomId });*/
  }

  


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
        socket.emit("message", {text: "message", message: "Hello", socketId: socket.id})
        console.log("sendingMessage")
    }


  
  const joinRoom = () => {
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
        <button onClick={() => sendMessage("HELLO")}>sendMessage</button>
        <button onClick={() => creatRoom()}>
          Create Room
        </button>
        <form onSubmit={() => enterRoom()}>
         <input 
           id ="code" 
           placeholder='ID of room to join' 
           value={123} 
           onChange = {(e) => setRoom(e.target.value)}>
         </input>
         </form>
      </div>
      
    </>
  );
};

export default Lobby;
