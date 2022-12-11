import { useNavigate } from "react-router-dom"
import { SuccessArea, Title, Title2, Desc, Movie, Tickets, Buyer, ButtonArea, Button } from "./styles"

export default ({ allSeats, setAllSeats, clickedSeats, setClickedSeats, buyersData, setBuyersData }) => {
    let navigate = useNavigate()

    function backToHomePage() {
        setAllSeats({})
        setClickedSeats([])
        setBuyersData([]);

        navigate('/')
    }

    return (
        <SuccessArea>
            <Title>Pedido feito com sucesso!</Title>

            <Movie data-test="movie-info">
                <Title2>Filme e Sessão</Title2>
                {allSeats.id &&
                    <>
                        <Desc>{allSeats.movie.title}</Desc>
                        <Desc>{allSeats.day.date} {allSeats.name}</Desc>
                    </>
                }
            </Movie>
            <Tickets data-test="seats-info">
                <Title2>Ingressos</Title2>
                {clickedSeats.length > 0 ? clickedSeats.map(cli => <Desc key={cli.id}>Assento {cli.name}</Desc>) : ''}
            </Tickets>
            <Buyer data-test="client-info">
                <Title2>Comprador</Title2>
                {buyersData.map((buyer, ind) => (
                    <div className="buyer" key={ind}>
                        <Desc>Nome: {buyer.nome}</Desc>
                        <Desc>CPF: {buyer.cpf}</Desc>
                    </div>
                ))}

            </Buyer>
            <ButtonArea>
                <Button data-test="go-home-btn" onClick={backToHomePage}>Voltar para Home</Button>
            </ButtonArea>
        </SuccessArea>
    )
}