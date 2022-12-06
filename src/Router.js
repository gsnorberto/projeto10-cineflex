import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sessions from "./pages/Sessions"
import Seat from "./pages/Seat"
import Success from "./pages/Success"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seat />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}