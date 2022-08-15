import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import {Container} from './styles'
import {Button} from '../../Forms/Button'

import { ReactComponent as  Feed} from 'assets/feed.svg'
import { ReactComponent as  Statistics} from 'assets/estatisticas.svg'
import { ReactComponent as  AddPhoto} from 'assets/adicionar.svg'
import { ReactComponent as Logout } from 'assets/sair.svg'
import { ContextAuth } from '../../../hooks/useAuth'

export function UserHeaderNav() {
    const [mobile, setMobile] = useState(null)
    const { userLogout } = useContext(ContextAuth)

    return (
        <Container>
            <NavLink to="/account" end >
                <Feed />
                {mobile && 'Minhas fotos'}
            </NavLink>
            <NavLink to="/account/statistic">
                <Statistics />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/account/post">
                <AddPhoto />
                {mobile && 'Adicionar Fotos'}
            </NavLink>
            <button onClick={()=>userLogout()}>
                <Logout />
                {mobile && 'Sair'}
            </button>   
        </Container>
    )
}