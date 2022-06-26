import { API_KEY, BASE_MOVIE_URL } from "../config"

export const GET = async (url, search = false) => {

    let URL_API;

    (!search) ?
        URL_API = `${BASE_MOVIE_URL}${url}?api_key=${API_KEY}` :
        URL_API = `${BASE_MOVIE_URL}${url}`;

    let response = await fetch(URL_API, {
        method: 'GET'
    });

    response = response.json();

    return response;
}