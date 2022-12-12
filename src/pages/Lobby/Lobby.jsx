import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { io } from 'socket.io-client';
import "./Lobby.css"
import Chat from './Chat';
import Multiplayer from './Multiplayer';



const socket = io.connect("http://localhost:3001");


const Lobby = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };
  
    return (
      <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
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
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Multiplayer socket={socket} username={username} room={room} />
        )}
      </div>
    );
};

export default Lobby;
