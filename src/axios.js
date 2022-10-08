import axios from 'axios';

const instance =  axios.create({
        // baseURL: 'http://localhost:8000',
        baseURL: 'http://35.78.65.206:8000/'
        
});

export default instance;

