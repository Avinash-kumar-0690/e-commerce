import axios from 'axios';


export const api = axios.create({
    baseURL:import.meta.env.VITE_API_KEY,
    timeout:5000,
}
)


