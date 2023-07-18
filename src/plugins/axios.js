import axios from "axios";

const $axios = axios.create({
    baseURL: 'http://localhost:4321',
    withCredentials: true,
})

$axios.interceptors.response.use(({ data }) => {
    return data
}, error => {
    if (error.response.status === 401) {
        window.location.href = '/login'
    }

    throw new Error(error.response.data)
})
export default $axios