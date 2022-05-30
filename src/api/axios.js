import axios from 'axios';

// so what we r doing here is to append a base url to a request 

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance;