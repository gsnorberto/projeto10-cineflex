import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions"
import Seat from "./pages/Seat"
import Success from "./pages/Success"

export const Router = () => {
    const [allSeats, setAllSeats] = useState({});
    const [clickedSeats, setClickedSeats] = useState([]);
    const [buyerName, setBuyerName] = useState('');
    const [buyerCPF, setbuyerCPF] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route
                    path="/assentos/:idSessao"
                    element={<Seat allSeats={allSeats} setAllSeats={setAllSeats} clickedSeats={clickedSeats} setClickedSeats={setClickedSeats} buyerName={buyerName} setBuyerName={setBuyerName} buyerCPF={buyerCPF} setbuyerCPF={setbuyerCPF} />}
                />
                <Route
                    path="/sucesso"
                    element={<Success allSeats={allSeats} setAllSeats={setAllSeats} clickedSeats={clickedSeats} setClickedSeats={setClickedSeats} buyerName={buyerName} setBuyerName={setBuyerName} buyerCPF={buyerCPF} setbuyerCPF={setbuyerCPF}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}