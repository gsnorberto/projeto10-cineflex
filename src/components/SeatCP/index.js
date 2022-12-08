import { SeatArea } from "./styles"
import { useState } from "react";

export default ({st, setClickedSeats, clickedSeats}) => {
    const [seatBGColor, setSeatBGColor] = useState('#C3CFD9');

    function handleSelectSeat (id) {
        if(clickedSeats.includes(id)){
            let newArray = clickedSeats.filter(e => e !== id)
            setClickedSeats(newArray)
            setSeatBGColor('#C3CFD9')
        } else {
            setClickedSeats([...clickedSeats, id])
            setSeatBGColor('#1AAE9E')
        }
    }

    return(
        <SeatArea
            color={!st.isAvailable ? '#FBE192' : seatBGColor}
            onClick={() => handleSelectSeat(st.id)}
            disabled={!st.isAvailable}
        >
            {st.name}
        </SeatArea>
    )
}