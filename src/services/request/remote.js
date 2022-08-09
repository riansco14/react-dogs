import api from "../api";


export async function loginAuth(userData) {
    const response = await api.post('jwt-auth/v1/token', userData)
    const { data, status, statusText } = response

    return {data, status, statusText}
}

export async function getUser() {
    const response = await api.get('api/user')
    const { data, status } = response

    return {status, data}
}

export async function postUser(dataUser) {
    try {
        const response = await api.post('api/user', dataUser)
        const { data, status } = response
        return {status, data}
    } catch (error) {
        return error.response
    }
    
}