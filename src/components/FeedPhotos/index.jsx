import { useQuery } from '@tanstack/react-query'
import { FeedPhotosItem } from 'components/FeedPhotosItem'
import { ContainerLoading } from 'components/Helpers/AuthLoading/styles'
import { Error } from 'components/Helpers/Error'
import React from 'react'
import { useState } from 'react'
import { getPhotos } from 'services/request/remote'

import { Container, FeedContainer } from './styles'
export function FeedPhotos({ page, handleInfiniteEnd, changeWaitChangeToTrue , userId, setModalPhoto }) {
    const [photosQuery, setPhotosQuery] = useState({ page, total: 6, user: userId ? userId : 0 })
    const { data, isLoading, isError, error } = useQuery(['photos', photosQuery], () => getPhotos(photosQuery), {
        onSuccess: (data) => {
            changeWaitChangeToTrue(page)
            if (data.length < 6) {
                handleInfiniteEnd()
            }
        }
    })

    if (isLoading)
        return <ContainerLoading />
    if (isError)
        return <Error error="Ocorreu algum erro" />

    if (data)
        return (<Container>
            <FeedContainer>
                {data.map(item => (<FeedPhotosItem key={item.id} photo={item} onClick={() => setModalPhoto(item)} />))}
            </FeedContainer>
        </Container>
        )
    else
        return null
}