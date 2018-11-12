//our action creator
import axios from 'axios';

const API_KEY = 'b11d8bc8b8b41816368718b7c2bc1cdf';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        //returning promise on the payload key - promise does not contain the actual data
        payload: request
    };
}