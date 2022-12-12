import SinglePlayer from "./App";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";

const App2 = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element = {<HomePage/>} />
                <Route path="/sp" element = {<SinglePlayer/>} />
                <Route path="/mp" element = { <Lobby />} />
            </Routes>
        </BrowserRouter>
       
    )
}

export default App2;