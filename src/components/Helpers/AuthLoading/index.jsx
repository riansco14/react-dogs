import { SpinLoading } from 'globalStyles'
import { ContextAuth } from 'hooks/useAuth'
import React from 'react'
import { useContext } from 'react'
import { Loading } from '../Loading'

import {Container, ContainerLoading} from './styles'

export function AuthLoading({ children }) {
    const { loading } = useContext(ContextAuth)    

    if (loading)
        return (
            <Loading/>
        )
        
        


    return (
        <Container>
            {children}
        </Container>
    )
}