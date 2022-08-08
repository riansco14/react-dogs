import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Forms/Button'
import { Input } from '../../../components/Forms/Input'
import { getUser, loginAuth } from '../../../services/request/remote'

import { Container, Form } from './styles'
import * as Yup from 'yup'
import { ContextAuth } from '../../../hooks/useAuth'

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
})

export function LoginForm() {
    const { loading, error, userLogin } = useContext(ContextAuth)

    async function handleSubmit({ username, password }) {
        await userLogin({username,password})
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values) => handleSubmit(values),
    });



    return (
        <Container>
            <h1>Login Form</h1>

            <Form onSubmit={formik.handleSubmit}>
                <Input
                    id="username"
                    name="username"
                    label="Nome do usuário"
                    type="text"
                    error={formik.errors.username}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />

                <Input
                    id="password"
                    name="password"
                    label="Senha"
                    type="password"
                    error={formik.errors.password}
                    value={formik.values.password}
                    onChange={formik.handleChange} />

                {loading ?
                    <Button disabled type='submit'>Carregando...</Button> :
                    <Button type='submit'>Entrar</Button>}
                {error && <p>{error}</p>}
            </Form>


            <Link to="/login/criar">Cadastro</Link>

        </Container>
    )
}