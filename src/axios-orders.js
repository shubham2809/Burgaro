import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgaro-ad350.firebaseio.com/'
});

export default instance;