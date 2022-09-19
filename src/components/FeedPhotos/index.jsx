import { useQuery } from '@tanstack/react-query'
import { FeedPhotosItem } from 'components/FeedPhotosItem'
import { ContainerLoading } from 'components/Helpers/AuthLoading/styles'
import { Error } from 'components/Helpers/Error'
import React from 'react'
import { useState } from 'react'
import { getPhotos } from 'services/request/remote'

import {Container, FeedContainer} from './styles'

export function FeedPhotos({ setModalPhoto }) {
    
    const [photosQuery, setPhotosQuery] = useState({page: 1, total: 9, user: 0})
    const {data, isLoading, isError, error} = useQuery(['photos', photosQuery], ()=> getPhotos(photosQuery))
    
    if (isLoading)
        return <ContainerLoading />
    if (isError)
        return <Error  error="Ocorreu algum erro" />
    
    if(data)
        return (<Container>
                <FeedContainer>
                    {data.map(item=>(<FeedPhotosItem key={item.id} photo={item} />))}
                </FeedContainer>
            </Container>
        )
    else 
        return null
}