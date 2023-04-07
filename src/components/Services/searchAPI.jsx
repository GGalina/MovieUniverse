import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c8cf41cbc51b38c2e1c60ca8bf6e538a';

const SearchApi = async (keyword) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${keyword}`);
    return response.data;
};

export default SearchApi;