import { BrowserRouter, Routes, Route } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import Lobby from "./pages/Lobby/Lobby";
import HomePage from "./pages/HomePage";
import WaitingPage from "./pages/WaitingPage";
import SinglePlayer from "./App";

import socketIO from 'socket.io-client';


const ENDPOINT = 'http://localhost:8081'
const socket = socketIO.connect(ENDPOINT);


const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/sp" element={<SinglePlayer />} />
      <Route path="/mp" element={<Lobby socket={socket}/>} />
      <Route path="/room" element={<WaitingPage />} />
      
    </Routes>
  </BrowserRouter>
);

export default Routing;