import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Forms/Button'
import { Input } from '../../../components/Forms/Input'
import { loginAuth } from '../../../services/request/remote'

import { Container, Form} from './styles'

export function LoginForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(event) {
        event.preventDefault();

        if (!username || !password)
            return

        loginAuth({
            username,
            password
        })
    }

    return (
        <Container>
            <h1>Login Form</h1>
            
            <Form onSubmit={handleSubmit}>
                <Input
                    name="username"
                    label="Nome do usuário"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)} />
                
                <Input
                    name="password"
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} />

                <Button type='submit'>Entrar</Button>
            </Form>

            
            <Link to="/login/criar">Cadastro</Link>

        </Container>
    )
}