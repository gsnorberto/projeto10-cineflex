import { SeatArea } from "./styles"
import { useState } from "react";

export default ({ st, setClickedSeats, clickedSeats, buyersData, setBuyersData }) => {
    const [seatBGColor, setSeatBGColor] = useState('#C3CFD9');
    const [seatBorderColor, setSeatBorderColor] = useState('#808F9D');

    function handleSelectSeat() {
        let ids = clickedSeats.map(c => c.id);

        if (!st.isAvailable) { // Assento não disponível
            alert('Esse assento não está disponível')
        }
        else if (ids.includes(st.id)) { // Retirar seleção do assento
            if (window.confirm('Gostaria realmente de remover seleção?') == true) {
                let filteredSeats = clickedSeats.filter(e => e.id !== st.id)
                setClickedSeats(filteredSeats)

                let filteredBuyers = buyersData.filter(buyer => buyer.idAssento !== st.id)
                setBuyersData(filteredBuyers)

                setSeatBGColor('#C3CFD9');
                setSeatBorderColor('#808F9D');
            }
        } else { // Selecionar assento
            setClickedSeats([...clickedSeats, st])
            setBuyersData([...buyersData, { idAssento: st.id, nome: '', cpf: '' }])
            setSeatBGColor('#1AAE9E');
            setSeatBorderColor('#0E7D71');
        }
    }

    return (
        <SeatArea data-test="seat"
            bgColor={!st.isAvailable ? '#FBE192' : seatBGColor}
            borderColor={!st.isAvailable ? '#F7C52B' : seatBorderColor}
            onClick={() => handleSelectSeat()}
        >
            {st.name}
        </SeatArea>
    )
}