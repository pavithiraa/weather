import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'fc86ed4e782b122dda697f738bf9aea5';
export const getData = async(city, country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}