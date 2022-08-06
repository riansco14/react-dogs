import api from "../api";


export async function loginAuth(data) {
    const response = await api.post('token', data)
    alert(JSON.stringify(response))
}