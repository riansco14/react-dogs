import api from "../api";


export async function loginAuth(userData) {
    const response = await api.post('jwt-auth/v1/token', userData)
    const { data, status, statusText } = response

    return { data, status, statusText }
}

export async function getUser() {
    const response = await api.get('api/user')
    const { data, status } = response

    return { status, data }
}

export async function postUser(dataUser) {
    try {
        const response = await api.post('api/user', dataUser)
        const { data, status } = response
        return { status, data }
    } catch (error) {
        return error.response
    }

}


export async function postPhoto(formData) {
    return api.post('api/photo', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
}

export async function getPhotos({ page, total, user }) {
    const response = await api.get(`api/photo/?_page=${page}&_total=${total}&_user=${user}`)
    return response.data
}


export async function getPhoto(id) {
    const response = await api.get(`api/photo/${id}`)
    return response.data
}


export async function deletePhoto(id) {
    const response = await api.delete(`api/photo/${id}`)
    return response
}

export async function getComments(id) {
    const response = await api.get(`api/comment/${id}`)
    return response.data
}

export async function postComment(id, data) {
    const response = await api.post(`api/comment/${id}`, data)
    return response.data
}

