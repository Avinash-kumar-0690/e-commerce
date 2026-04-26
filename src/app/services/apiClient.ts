import axios from 'axios';

// Create Instance 
export const api = axios.create({
    baseURL:"https://dummyjson.com",
    timeout:5000,
})


