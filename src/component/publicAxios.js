import axios from "axios"


const publicAxios = axios.create({
  baseURL: 'http://localhost:5000',
});

export default publicAxios;