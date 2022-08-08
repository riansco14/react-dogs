import React, { useContext } from 'react'
import Dogs from '../../assets/dogs.svg'
import { ContextAuth } from '../../hooks/useAuth'
import { Container, LinkLogin, LinkLogo, Nav } from './styles'

export function Header() {
    const { user, userLogout } = useContext(ContextAuth)
    return (
        <Container>
            <Nav className='container'>
                    <LinkLogo to="/">
                        <img src={Dogs} alt="Your SVG" />
                    </LinkLogo>

                {user && user?.nome ? (
                    <LinkLogin className='login' to="/conta">
                        {user.nome}
                        <button onClick={()=>userLogout()}>Sair</button>
                    </LinkLogin>):
                    (<LinkLogin className='login' to="/login">Login</LinkLogin>)}

            </Nav>

        </Container>
    )
}