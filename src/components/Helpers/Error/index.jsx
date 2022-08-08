import React from 'react'

import {Container} from './styles'

export function Error({ error }) {
    
    if (!error) return null
    
    return (
        <Container>
            {error}
        </Container>
    )
}