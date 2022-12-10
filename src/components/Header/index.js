import { useLocation, useNavigate } from "react-router-dom"
import { HeaderArea, Button } from "./styles"
import arrowBack from "../../assets/icons/arrow-back-outline.svg";

export default () => {
    let location = useLocation();
    let navigate = useNavigate();

    function goBack(){
        navigate(-1);
    }

    return(
        <HeaderArea>
            <div>CINEFLEX</div>
            {location.pathname !== '/' && location.pathname !== '/sucesso' &&
                <Button onClick={goBack} src={arrowBack} />
            }
        </HeaderArea>
    )
}