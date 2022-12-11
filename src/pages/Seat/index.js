import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Button, ButtonArea, Form, SeatArea, Seats, Status, Title, Label, Input, Footer, LoadingButton } from "./styles"
import SeatCP from "../../components/SeatCP";
import loadingIcon from "../../assets/icons/load.svg";

export default ({ allSeats, setAllSeats, clickedSeats, setClickedSeats, buyersData, setBuyersData }) => {
    let navigate = useNavigate();
    let { idSessao } = useParams();

    useEffect(() => {
        getSeats();
    }, []);

    // Obter lista de assentos da sessão
    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';
    const getSeats = () => {
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
            .then(response => {
                setAllSeats(response.data);
            })
            .catch(err => {
                alert('Error 2', err.message);
            })
    }

    // Reservar assento
    const handleBookSeat = (e) => {
        let isAllCorrect = true;
        e.preventDefault();

        for (let i = 0; i < buyersData.length; i++) {
            if (buyersData[i].nome === '') {
                alert('Há campo(s) vazio(s)');
                isAllCorrect = false;
                return;
            } else if (buyersData[i].cpf.length !== 11) {
                alert('Há campo(s) com cpf inválido');
                isAllCorrect = false;
                return;
            } else if (clickedSeats.length === 0) {
                alert('Selecione um assento');
                isAllCorrect = false;
                return;
            }
        }

        if(isAllCorrect && clickedSeats.length !== 0){
            let ids = clickedSeats.map(c => c.id);
            axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, {
                ids,
                compradores: buyersData
            }).then(response => { // Reserva realizada com sucesso
                navigate('/sucesso')
            }).catch(err => { // Erro ao reservar
                alert('Error 1:', err.message);
            })
        } else {
            alert('Selecione um assento');
        }
    }

    // Retorna a posição de usuário específico
    function getUserIndex(id_assento) {
        const index = buyersData.findIndex(buyer => buyer.idAssento === id_assento)
        return index
    }
    // Atualizar nome do usuário - Input
    function updateUserName(e, id_assento) {
        const newUserData = buyersData.map(buyer => {
            if (buyer.idAssento === id_assento) {
                return { ...buyer, nome: e.target.value }
            }
            return buyer
        })
        setBuyersData(newUserData);
    }
    // Atualizar CPF do usuário - Input
    function updateUserCpf(e, id_assento) {
        const newUserData = buyersData.map(buyer => {
            if (buyer.idAssento === id_assento) {
                return { ...buyer, cpf: e.target.value }
            }
            return buyer
        })
        setBuyersData(newUserData);
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
                                buyersData={buyersData}
                                setBuyersData={setBuyersData}
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



                    <Form onSubmit={handleBookSeat}>
                        {clickedSeats.map(cSeat => (
                            <div key={cSeat.id}>

                                <div className="title">Assento {cSeat.name}</div>
                                <Label htmlFor="">
                                    Nome do Comprador
                                    <Input data-test="client-name"
                                        placeholder="Digite seu nome..."
                                        value={buyersData[getUserIndex(cSeat.id)].nome}
                                        type="text"
                                        onChange={(e) => updateUserName(e, cSeat.id)}
                                    />
                                </Label>
                                <Label htmlFor="">
                                    CPF do comprador:
                                    <Input data-test="client-cpf"
                                        value={buyersData[getUserIndex(cSeat.id)].cpf}
                                        type="number"
                                        onChange={(e) => updateUserCpf(e, cSeat.id)}
                                        placeholder="Digite seu CPF..."
                                    />
                                </Label>
                            </div>
                        ))}
                        <ButtonArea>
                            <Button data-test="book-seat-btn" type="submit">Reservar Assento</Button>
                        </ButtonArea>
                    </Form>

                    <Footer data-test="footer">
                        <img src={allSeats.movie.posterURL} alt="" />

                        <div className="title">
                            <div>{allSeats.movie.title}</div>
                            <div>{allSeats.day.weekday} - {allSeats.name}</div>
                        </div>
                    </Footer>
                </>
            }
            {!allSeats.id &&
                <LoadingButton src={loadingIcon} />
            }
        </SeatArea>
    )
}