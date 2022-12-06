import { useState, useEffect } from "react";
import axios from 'axios';

export default () => {
    const [listMovies, setListMovies] = useState([]);

    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

    const getMovies = () => {
        axios.get(`${URL}/movies`)
            .then(response => {
                setListMovies(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            {listMovies.length > 0 &&
                listMovies.map(movie => <div>{movie.title}</div> )
            }
        </>
    )
}