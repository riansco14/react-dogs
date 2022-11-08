import { useQuery } from '@tanstack/react-query'
import { AuthLoading } from 'components/Helpers/AuthLoading'
import { Error } from 'components/Helpers/Error'
import { Loading } from 'components/Helpers/Loading'
import { SpinLoading } from 'globalStyles'
import React from 'react'
import { getPhoto } from 'services/request/remote'
import { Photo } from './Photo'
import { PhotoContent } from './PhotoContent'

import {Container, Image} from './styles'

export function FeedModal({photo, closeModal}) {
    const { data, isLoading, error } = useQuery(['photo', photo.id], () => getPhoto(photo.id))
    
    
    function handleOutsideClick(event) {
        if (event.target === event.currentTarget)
            closeModal()
    }

    return (
        <Container onClick={handleOutsideClick}>
            {isLoading? (<Loading/>):(data ? (<PhotoContent data={data} />) : null)}
            {error && <Error error={error} />}
        </Container>
    )
}