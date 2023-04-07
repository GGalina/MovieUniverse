import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'c8cf41cbc51b38c2e1c60ca8bf6e538a';

const MovieDetailsApi = async (movieId, part) => {
    const response = await axios.get(`/movie/${movieId}${part}?api_key=${API_KEY}`);
    return response.data;
};

const ImagesAPI = async () => {
  const data = await axios.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};

export {MovieDetailsApi, ImagesAPI};

