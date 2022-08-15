import { SpinLoading } from 'globalStyles'
import { ContextAuth } from 'hooks/useAuth'
import React from 'react'
import { useContext } from 'react'

import {Container, ContainerLoading} from './styles'

export function AuthLoading({ children }) {
    const { loading } = useContext(ContextAuth)    

    if (loading)
        return (
            <ContainerLoading>
                <SpinLoading />
            </ContainerLoading>
        )
        
        


    return (
        <Container>
            {children}
        </Container>
    )
}