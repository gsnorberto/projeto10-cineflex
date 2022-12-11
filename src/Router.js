import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Sessions from "./pages/Sessions"
import Seat from "./pages/Seat"
import Success from "./pages/Success"
import Header from './components/Header';

export const Router = () => {
    const [allSeats, setAllSeats] = useState({});
    const [clickedSeats, setClickedSeats] = useState([]);
    const [buyersData, setBuyersData] = useState([]);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route
                    path="/assentos/:idSessao"
                    element={<Seat allSeats={allSeats} setAllSeats={setAllSeats} clickedSeats={clickedSeats} setClickedSeats={setClickedSeats} buyersData={buyersData} setBuyersData={setBuyersData}/>}
                />
                <Route
                    path="/sucesso"
                    element={<Success allSeats={allSeats} setAllSeats={setAllSeats} clickedSeats={clickedSeats} setClickedSeats={setClickedSeats} buyersData={buyersData} setBuyersData={setBuyersData}/>}
                />
            </Routes>
        </BrowserRouter>
    )
}