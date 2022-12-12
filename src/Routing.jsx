import SinglePlayer from "./App";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";
import { w3cwebsocket as W3CWebSocket} from 'websocket'; 


const client = new W3CWebSocket("ws://127.0.0.1:8081");
const Routing = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element = {<HomePage/>} />
                <Route path="/sp" element = {<SinglePlayer/>} />
                <Route path="/mp" element = { <Lobby client={client}/>} />
            </Routes>
        </BrowserRouter>
       
    )
}

export default Routing;