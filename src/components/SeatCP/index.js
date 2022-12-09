import { SeatArea } from "./styles"
import { useState } from "react";

export default ({st, setClickedSeats, clickedSeats}) => {
    const [seatBGColor, setSeatBGColor] = useState('#C3CFD9');

    function handleSelectSeat () {
        if(!st.isAvailable){ // Assento não disponível
            alert('Esse assento não está disponível')
        }
        else if(clickedSeats.includes(st.id)){ // Retirar seleção do assento
            let newArray = clickedSeats.filter(e => e.id !== st.id)
            setClickedSeats(newArray)
            setSeatBGColor('#C3CFD9')
        } else { // Selecionar assento
            setClickedSeats([...clickedSeats, st])
            setSeatBGColor('#1AAE9E')
        }
    }

    return(
        <SeatArea
            color={!st.isAvailable ? '#FBE192' : seatBGColor}
            onClick={() => handleSelectSeat()}
        >
            {st.name}
        </SeatArea>
    )
}