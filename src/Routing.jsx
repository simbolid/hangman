import { BrowserRouter, Routes, Route } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import Lobby from "./pages/Lobby/Lobby";
import HomePage from "./pages/HomePage";
import WaitingPage from "./pages/WaitingPage";
import SinglePlayer from "./App";



const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/sp" element={<SinglePlayer />} />
      <Route path="/mp" element={<Lobby/>} />
      <Route path="/room" element={<WaitingPage />} />
      
    </Routes>
  </BrowserRouter>
);

export default Routing;