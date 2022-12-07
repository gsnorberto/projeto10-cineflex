import { SessionArea, SessionDate, SessionTime, SessionTimes } from "./styles"



export default ({ dayInfos }) => {

    return(
        <SessionArea>
            <SessionDate>{dayInfos.weekday} - {dayInfos.date}</SessionDate>
            <SessionTimes>
                {dayInfos.showtimes.map(time => <SessionTime key={time.id}>{time.name}</SessionTime>)}
            </SessionTimes>
        </SessionArea> 
    )
}