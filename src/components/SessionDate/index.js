import { SessionArea, SessionDate, SessionTime, SessionTimes } from "./styles"
import { useNavigate } from "react-router-dom"



export default ({ dayInfos }) => {
    let navigate = useNavigate();

    function handleNextPage (id) {
        navigate(`/assentos/${id}`);
    }

    return(
        <SessionArea>
            <SessionDate>{dayInfos.weekday} - {dayInfos.date}</SessionDate>
            <SessionTimes>
                {dayInfos.showtimes.map(time => <SessionTime onClick={() => handleNextPage(time.id)} key={time.id}>{time.name}</SessionTime>)}
            </SessionTimes>
        </SessionArea> 
    )
}