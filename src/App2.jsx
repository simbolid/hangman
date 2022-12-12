import SinglePlayer from "./App";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App2 = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element = {<HomePage/>} />
                <Route path="/sp" element = {<SinglePlayer/>} />
            </Routes>
        </BrowserRouter>
       
    )
}

export default App2;