import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/',
});

export default api