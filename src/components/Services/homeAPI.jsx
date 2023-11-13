import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c8cf41cbc51b38c2e1c60ca8bf6e538a';

const HomeApi = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
};

const HeroApi = async () => {
    const data = await axios.get(`/discover/movie?api_key=${API_KEY}`);
    return data.data;
};

export { HomeApi, HeroApi };