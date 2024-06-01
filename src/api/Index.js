import axios from 'axios';

const pokemonAPI = axios.create({
  baseURL: import.meta.env.VITE_API_POKEMON_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default pokemonAPI;