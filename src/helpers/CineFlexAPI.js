import axios from 'axios';

let URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

export const getMovies = () => {
    axios.get(`${URL}/movies`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
            return
        })
}