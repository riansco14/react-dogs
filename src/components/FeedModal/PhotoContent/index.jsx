import { Title } from 'globalStyles'
import React from 'react'
import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments'

import {AuthorContainer, Container, Details, DetailsAttributesList, DetailsVisualizationsSpan, Image} from './styles'

export function PhotoContent({ data }) {
    const { photo, comments } = data
    
    return (
        <Container>
            <Image src={photo.src} />
            <Details>
                <div>
                    <AuthorContainer>
                        <Link to={`/perfil/${photo.author}`} >
                            @{photo.author}
                        </Link>
                        <DetailsVisualizationsSpan>
                            {photo.acessos}
                        </DetailsVisualizationsSpan>
                    </AuthorContainer> 
                    <Title>
                        <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
                    </Title>
                    <DetailsAttributesList>
                        <li>{ photo.peso } kg</li>
                        <li>{ photo.idade } anos</li>
                    </DetailsAttributesList>
                </div>
                <PhotoComments id={photo.id} comments={comments} />
            </Details>
        </Container>
    )
}