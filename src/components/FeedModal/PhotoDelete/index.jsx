
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { deletePhoto } from 'services/request/remote'

import { ButtonDelete, Container } from './styles'

export function PhotoDelete({ id }) {
    const { isLoading, mutate } = useMutation(['deletePhoto', id], () => deletePhoto(id), {
        onSuccess: (response) => {
            const { data, status } = response
            if (status === 200) {
                window.location.reload()
            }

        }
    })

    function handleDelete() {
        const confirm = window.confirm('Tem certeza que deseja deletar ?')
        if (confirm)
            mutate()
    }

    return (
        <Container>
            <ButtonDelete onClick={handleDelete} disabled={isLoading}>{isLoading ? "Deletando..." : "Deletar"}</ButtonDelete>
        </Container>
    )
}