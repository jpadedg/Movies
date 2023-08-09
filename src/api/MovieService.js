import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "4fbd9223d1a7a4b99876915c361af620";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    
   
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }


    
}

export default MovieService;

