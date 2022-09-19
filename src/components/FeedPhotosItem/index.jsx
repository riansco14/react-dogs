import React from 'react'

import {Container, Image, ImageNumberAccess} from './styles'

export function FeedPhotosItem({ photo }) {
    return (
        <Container>
            <Image src={photo.src} alt={photo.title} />
            <ImageNumberAccess>{photo.acessos}</ImageNumberAccess>
        </Container>
    )
}