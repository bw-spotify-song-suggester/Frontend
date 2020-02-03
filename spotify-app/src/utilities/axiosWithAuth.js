import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`
    console.log(token)
    return axios.create({
        baseURL: ''
        headers: {
            "authorization" : token
        }
    })

}