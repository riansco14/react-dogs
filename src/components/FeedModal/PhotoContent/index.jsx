import { Image } from 'components/Helpers/Image'
import { Title } from 'globalStyles'
import { ContextAuth } from 'hooks/useAuth'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments'
import { PhotoDelete } from '../PhotoDelete'

import { AuthorContainer, Container, Details, DetailsAttributesList, DetailsVisualizationsSpan } from './styles'

export function PhotoContent({ data }) {
    const { user } = useContext(ContextAuth)
    const { photo, comments } = data

    return (
        <Container>
            <Image src={photo.src} />
            <Details>
                <div>
                    <AuthorContainer>
                        {user.username === photo.author ? (<PhotoDelete id={photo.id} />) : (<Link to={`/perfil/${photo.author}`} >
                            @{photo.author}
                        </Link>)}
                        <DetailsVisualizationsSpan>
                            {photo.acessos}
                        </DetailsVisualizationsSpan>
                    </AuthorContainer>
                    <Title>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </Title>
                    <DetailsAttributesList>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </DetailsAttributesList>
                </div>
                <PhotoComments id={photo.id} comments={comments} />
            </Details>
        </Container>
    )
}