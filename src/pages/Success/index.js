import { SuccessArea, Title, Title2, Desc, Movie, Tickets, Buyer } from "./styles"

export default () => {
    return(
        <SuccessArea>
            <Title>Pedido feito com sucesso!</Title>

            <Movie>
                <Title2>Filme e Sessão</Title2>
                <Desc>Teste...</Desc>
                <Desc>Teste...</Desc>
            </Movie>
            <Tickets>
                <Title2>Ingressos</Title2>
                <Desc>Numéro 15</Desc>
                <Desc>Numéro 16</Desc>
            </Tickets>
            <Buyer>
                <Title2>Comprador</Title2>
                <Desc>Ciclano de Souza</Desc>
                <Desc>111.222.333-55</Desc>
            </Buyer>
        </SuccessArea>
    )
}