import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import {Container, MobileButton} from './styles'

import { ReactComponent as  Feed} from 'assets/feed.svg'
import { ReactComponent as  Statistics} from 'assets/estatisticas.svg'
import { ReactComponent as  AddPhoto} from 'assets/adicionar.svg'
import { ReactComponent as Logout } from 'assets/sair.svg'
import { ContextAuth } from '../../../hooks/useAuth'
import { useMedia } from 'hooks/useMedia'

export function UserHeaderNav() {
    const { userLogout } = useContext(ContextAuth)

    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = useState(false)

    const { pathname } = useLocation()

    useEffect(() => {
        setMobileMenu(false)
    }, [pathname])
    

    return (<>
        {mobile && <MobileButton mobileMenu={mobileMenu} onClick={()=>setMobileMenu(oldState=>!oldState)}></MobileButton>}
        <Container mobile={mobile} mobileMenu={mobileMenu}>
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
            <button className='buttonLogout' onClick={()=>userLogout()}>
                <Logout />
                {mobile && 'Sair'}
            </button>   
        </Container>
        </>
    )
}