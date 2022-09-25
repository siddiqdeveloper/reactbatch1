import axios from 'axios';

export const ApiService = axios.create({
    url:'http://localhost:3001/courses'
})