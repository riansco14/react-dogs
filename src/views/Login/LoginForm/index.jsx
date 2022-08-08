import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Forms/Button'
import { Input } from '../../../components/Forms/Input'

import * as Yup from 'yup'
import { ContextAuth } from '../../../hooks/useAuth'
import { AnimeLeft, Title } from '../../../globalStyles'
import { Form, LostPassword, Register, SubTitle } from './styles'
import { Error } from '../../../components/Helpers/Error'

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
        <AnimeLeft>
            <Title>Login Form</Title>

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
                <Error error={error} />
            </Form>
            <LostPassword to="/login/lost-password">Perdeu a senha</LostPassword>
            <Register>
                <SubTitle>Cadastre-se</SubTitle>
                <p>Ainda não possui conta ? Cadastre-se no site.</p>
                <Button>
                    <Link to="/login/create">Cadastro</Link>
                </Button>
            </Register>

        </AnimeLeft>
    )
}