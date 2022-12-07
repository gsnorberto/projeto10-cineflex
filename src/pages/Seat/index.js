import { Button, ButtonArea, Inputs, SeatArea, Seats, St, Status, Title, Label, Input, Footer } from "./styles"

export default () => {
    return (
        <SeatArea>
            <Title>Selecione o(s) assento(s)</Title>

            <Seats>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
                <St>1</St>
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
                <img src="" alt="" />
                <div className="title">Teste...</div>
            </Footer>
        </SeatArea>
    )
}