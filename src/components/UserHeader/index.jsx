import React, { useState } from 'react'

import { Container } from './styles'
import {Title} from '../../globalStyles'
import { UserHeaderNav } from './UserHeaderNav'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function UserHeader() {
    const [title, setTitle] = useState('')

    const location = useLocation()

    useEffect(() => {
        const { pathname } = location
        switch (pathname) {
            case '/account':
                setTitle('Minhas Fotos')
                break
            case '/account/statistic':
                setTitle('Estatisticas')
                break
            case '/account/post':
                setTitle('Adicionar Fotos')
                break
            default:
                setTitle('')
                break
        }
    
    }, [location])
    


    return (
        <Container className='container'>
            <Title>
                {title}
            </Title>
            <UserHeaderNav />

            
        </Container>
    )
}