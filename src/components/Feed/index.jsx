import { useQuery } from '@tanstack/react-query'
import { FeedModal } from 'components/FeedModal'
import { FeedPhotos } from 'components/FeedPhotos'
import React, { useState } from 'react'

import {Container} from './styles'

export function Feed() {
    const [modalPhoto, setModalPhoto] = useState(null)

    const closeModal = ()=> setModalPhoto(null)
    
    return (
        <Container>
            {modalPhoto && <FeedModal photo={modalPhoto} closeModal={closeModal}></FeedModal>}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </Container>
    )
}