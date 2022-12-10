import { SessionsArea, Title, Footer } from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import SessionDate from "../../components/SessionDate";

export default () => {
    const [movieInfos, setMovieInfos] = useState({});
    const params = useParams();
    const idFilme = params.idFilme;

    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

    const getMovie = () => {
        axios.get(`${URL}/movies/${idFilme}/showtimes`)
            .then(response => {
                setMovieInfos(response.data);
            })
            .catch(err => {
                alert(err);
            })
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <SessionsArea>

            {movieInfos.id &&
                <>
                    <Title>Selecione um Horário</Title>

                    {movieInfos.days.map(day => <SessionDate key={day.id} dayInfos={day} />)}
                    
                    <Footer>
                        <img src={movieInfos.posterURL} alt={movieInfos.title} />
                        <div className="title">{movieInfos.title}</div>
                    </Footer>
                </>
            }
            {!movieInfos.id &&
                <div>Carregando...</div>
            }
        </SessionsArea>
    )
}