import Axios from "axios"; // Llamado a API REST

const ROOT_URL = 'https://newsapi.org/v2/';
const API_KEY = 'a3faa2c4000347aab92b7b672da0eb10';
const FILTER = 'country=us&category=business';

export function getTopHeadelines() {
    return Axios.get(ROOT_URL + '/top-headlines?' + FILTER + '&apiKey=' + API_KEY);
}