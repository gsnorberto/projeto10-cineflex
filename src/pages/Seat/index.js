import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, ButtonArea, Inputs, SeatArea, Seats, Status, Title, Label, Input, Footer } from "./styles"
import SeatCP from "../../components/SeatCP";


export default () => {
    let navigate = useNavigate();
    const [allSeats, setAllSeats] = useState({});
    const [clickedSeats, setClickedSeats] = useState([]);
    const [buyerName, setBuyerName] = useState('');
    const [buyerCPF, setbuyerCPF] = useState('');
    let { idSessao } = useParams();

    useEffect(() => {
        getSeats();
    }, []);


    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';
    const getSeats = () => {
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
            .then(response => {
                setAllSeats(response.data);
            })
            .catch(err => {
                alert('Error', err.message); 
            })
    }

    const handleBookSeat = () => {
        if(buyerName === ''){
            alert('Digite um nome válido!');
        } else if(buyerCPF.length !== 11){
            alert('Digite um cpf válido!');
        } else if(clickedSeats.length === 0){
            alert('Selecione um assento')
        } else {
            axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, {
                ids: clickedSeats,
	            name: buyerName,
	            cpf: buyerCPF
            }).then(response => {
                console.log(response);
                navigate('/sucesso')
            }).catch(err => {
                alert('Error', err.message);
            })
        }


    }

    return (
        <SeatArea>
            {allSeats.id &&
                <>
                    <Title>Selecione o(s) assento(s)</Title>

                    <Seats>
                        {allSeats.seats.map(st => (
                            <SeatCP
                                st={st}
                                key={st.id}
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
                            <Input
                                placeholder="Digite seu nome..."
                                value={buyerName}
                                onChange={(e) => setBuyerName(e.target.value)}
                            />
                        </Label>

                        <Label>
                            CPF do comprador:
                            <Input
                                value={buyerCPF}
                                onChange={(e) => setbuyerCPF(e.target.value)}
                                placeholder="Digite seu CPF..."
                            />
                        </Label>
                    </Inputs>

                    <ButtonArea>
                        <Button onClick={handleBookSeat}>Reservar Assento</Button>
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