import api from "../api";


export async function loginAuth(userData) {
    const response = await api.post('jwt-auth/v1/token', userData)
    const { data } = response

    return data
}

export async function getUser(token) {
    const response = await api.get('api/user', { headers: { 'Authorization': `Bearer ${token}` } })
    const { data } = response

    return data
}