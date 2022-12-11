import { useLocation, useNavigate } from "react-router-dom"
import { HeaderArea, Button } from "./styles"
import arrowBack from "../../assets/icons/arrow-back-outline.svg";

export default ({setClickedSeats, setBuyersData}) => {
    let location = useLocation();
    let navigate = useNavigate();

    function goBack(){
        setClickedSeats([]);
        setBuyersData([]);
        navigate(-1);
    }

    return(
        <HeaderArea>
            <div>CINEFLEX</div>
            {location.pathname !== '/' && location.pathname !== '/sucesso' &&
                <Button data-test="go-home-header-btn" onClick={goBack} src={arrowBack} />
            }
        </HeaderArea>
    )
}