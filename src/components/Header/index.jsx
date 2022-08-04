import React from 'react'
import Dogs from '../../assets/dogs.svg'
import { Container, LinkLogin, LinkLogo, Nav } from './styles'

export function Header() {
    return (
        <Container>
            <Nav className='container'>
                    <LinkLogo to="/">
                        <img src={Dogs} alt="Your SVG" />
                    </LinkLogo>

                <LinkLogin className='login' to="/login">Login</LinkLogin>

            </Nav>

        </Container>
    )
}