import axios from 'axios';

const instance =  axios.create({
        // baseURL: 'http://localhost:8000',
        // baseURL: 'https://59e8-125-63-100-177.in.ngrok.io/'
        baseURL: 'http://35.78.65.206:80'
        
});

export default instance;

