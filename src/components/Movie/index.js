import { MovieArea } from "./styles";
import { useNavigate } from "react-router-dom";

export default ({ id, title, imgURL}) => {
    const navigate = useNavigate();

    function handleNextPage () {
        navigate(`/sessoes/${id}`)
    }

    return(
        <MovieArea data-test="movie" onClick={handleNextPage}>
            <img src={imgURL} alt={title} />
        </MovieArea>
    )
}