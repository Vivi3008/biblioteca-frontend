import axios from 'axios'

const api = axios.create({
    baseURL: "https://devchallenge-biblioteca.herokuapp.com/"
})

export default api