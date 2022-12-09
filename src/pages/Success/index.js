import { useNavigate } from "react-router-dom"
import { SuccessArea, Title, Title2, Desc, Movie, Tickets, Buyer, ButtonArea, Button } from "./styles"

export default ({ allSeats, setAllSeats, clickedSeats, setClickedSeats, buyerName, setBuyerName, buyerCPF, setbuyerCPF }) => {
    let navigate = useNavigate()

    function backToHomePage(){
        setAllSeats({})
        setClickedSeats([])
        setBuyerName('')
        setbuyerCPF('')

        navigate('/')
    }

    return (
        <SuccessArea>
            <Title>Pedido feito com sucesso!</Title>

            <Movie>
                <Title2>Filme e Sessão</Title2>
                {allSeats.id &&
                    <>
                        <Desc>{allSeats.movie.title}</Desc>
                        <Desc>{allSeats.day.date} {allSeats.name}</Desc>
                    </>
                }
            </Movie>
            <Tickets>
                <Title2>Ingressos</Title2>
                {clickedSeats.length > 0 ? clickedSeats.map(cli => <Desc key={cli.id}>Assento {cli.name}</Desc>) : ''}
            </Tickets>
            <Buyer>
                <Title2>Comprador</Title2>
                <Desc>Nome: {buyerName}</Desc>
                <Desc>CPF: {buyerCPF}</Desc>
            </Buyer>
            <ButtonArea>
                <Button onClick={backToHomePage}>Voltar para Home</Button>
            </ButtonArea>
        </SuccessArea>
    )
}