import { useState, useEffect } from "react";
import axios from 'axios';
import Movie from "../../components/Movie";
import { MoviesArea, LoadinButton } from "./styles"
import loadingIcon from "../../assets/icons/load.svg";

export default () => {
    const [listMovies, setListMovies] = useState([]);

    let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

    const getMovies = () => {
        axios.get(`${URL}/movies`)
            .then(response => {
                setListMovies(response.data);
            })
            .catch(err => {
                alert(err);
            })
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
  
            <MoviesArea>
                {listMovies.length > 0 &&
                    listMovies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imgURL={movie.posterURL}
                        />
                    ))
                }
                {listMovies.length === 0 &&
                    <LoadinButton src={loadingIcon}  />
                }
            </MoviesArea>

    )
}