import React from 'react'

import {Container} from './styles'

export function Button({children, ...props}) {
    return (
        <Container {...props}>
            {children}
        </Container>
    )
}