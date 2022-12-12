import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { io } from 'socket.io-client';
import "./Lobby.css"
import Chat from './Chat';
import Multiplayer from './Multiplayer';



const socket = io.connect("http://localhost:3001");


const Lobby = () => {
  let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      } else {
        alert("NEED NAME & ROOM")
      }
    };
    function nav(){
      navigate("/");
    }
    return (
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h2>Multi-Player Mode:</h2>
            <p>Instructions: <br /><br />1. <i>Create</i> your own room and share it with your friends</p>
            <p>2. <i>Join</i> a room with an existing code</p>
            <div id = "inputField">
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            </div>

            <button onClick={joinRoom}>Join A Room</button>
            <button id = "back" onClick={() => nav()} > Back </button>
          </div>
        ) : (
          <Multiplayer socket={socket} username={username} room={room} />
        )}
      </div>
    );
};

export default Lobby;
