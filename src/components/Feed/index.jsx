import { useQuery } from '@tanstack/react-query'
import { FeedModal } from 'components/FeedModal'
import { FeedPhotos } from 'components/FeedPhotos'
import React from 'react'

import {Container} from './styles'

export function Feed() {
    const [modalPhoto, setModalPhoto] = useState(null)
    
    return (
        <Container>
            {modalPhoto && <FeedModal photo={modalPhoto}></FeedModal>}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </Container>
    )
}