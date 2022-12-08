import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonArea, Inputs, SeatArea, Seats, St, Status, Title, Label, Input, Footer } from "./styles"
import SeatCP from "../../components/SeatCP";


export default () => {
    const [allSeats, setAllSeats] = useState({});
    const [clickedSeats, setClickedSeats] = useState([]);
    let { idSessao } = useParams();


    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

    const getSeats = () => {
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
            .then(response => {
                console.log(response.data);
                setAllSeats(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getSeats();
    }, []);

    useEffect(() => {
        console.log(clickedSeats);
    }, [clickedSeats]);



    return (
        <SeatArea>
            {allSeats.id &&
                <>
                    <Title>Selecione o(s) assento(s)</Title>

                    <Seats>
                        {allSeats.seats.map(st => (
                            <SeatCP
                                st={st}
                                setClickedSeats={setClickedSeats}
                                clickedSeats={clickedSeats}
                            />
                        ))}
                    </Seats>

                    <Status>
                        <div className="status">
                            <div className="circle green"></div>
                            <div className="title">Selecionado</div>
                        </div>
                        <div className="status">
                            <div className="circle gray"></div>
                            <div className="title">Disponível</div>
                        </div>
                        <div className="status">
                            <div className="circle yellow"></div>
                            <div className="title">Indisponível</div>
                        </div>
                    </Status>

                    <Inputs>
                        <Label>
                            Nome do comprador:
                            <Input placeholder="Digite seu nome..." />
                        </Label>

                        <Label>
                            CPF do comprador:
                            <Input placeholder="Digite seu CPF..." />
                        </Label>
                    </Inputs>

                    <ButtonArea>
                        <Button>Reservar Assento</Button>
                    </ButtonArea>

                    <Footer>
                        <img src={allSeats.movie.posterURL} alt="" />

                        <div className="title">
                            <div>{allSeats.movie.title}</div>
                            <div>{allSeats.day.weekday} - {allSeats.name}</div>
                        </div>
                    </Footer>
                </>
            }
        </SeatArea>
    )
}