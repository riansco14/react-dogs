import { useQuery } from '@tanstack/react-query'
import { Error } from 'components/Helpers/Error'
import { SpinLoading } from 'globalStyles'
import React from 'react'
import { getPhoto } from 'services/request/remote'
import { Photo } from './Photo'
import { PhotoContent } from './PhotoContent'

import {Container, Image} from './styles'

export function FeedModal({photo, closeModal}) {
    const {data, isLoading , error } = useQuery(['photo', photo.id], () => getPhoto(photo.id))
    if (isLoading)
        return <SpinLoading />
    
    function handleOutsideClick(event) {
        if (event.target === event.currentTarget)
            closeModal()
    }

    return (
        <Container onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {data ? (<PhotoContent data={data} />) : null}
        </Container>
    )
}