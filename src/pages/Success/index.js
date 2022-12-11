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

    function cpfFormat (cpf) {
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }

    return (
        <SuccessArea>
            <Title>Pedido feito com sucesso!</Title>

            <Movie data-test="movie-info">
                <Title2>Filme e sessão</Title2>
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
                        <Desc>CPF: {cpfFormat(buyer.cpf)}</Desc>
                    </div>
                ))}

            </Buyer>
            <ButtonArea>
                <Button data-test="go-home-btn" onClick={backToHomePage}>Voltar para Home</Button>
            </ButtonArea>
        </SuccessArea>
    )
}