import { Image } from 'components/Helpers/Image'
import React from 'react'

import {Container, ImageNumberAccess} from './styles'

export function FeedPhotosItem({ photo, onClick }) {
    
    return (
        <Container onClick={onClick}>
            <Image src={photo.src} alt={photo.title} />
            <ImageNumberAccess>{photo.acessos}</ImageNumberAccess>
        </Container>
    )
}