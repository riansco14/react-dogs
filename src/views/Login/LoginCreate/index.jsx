import React, { useContext, useState } from 'react'
import { AnimeLeft, Title } from '../../../globalStyles'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Form } from './styles';
import { Button } from '../../../components/Forms/Button';
import { Input } from '../../../components/Forms/Input';
import {  postUser } from '../../../services/request/remote';
import { ContextAuth } from '../../../hooks/useAuth';
import { Error } from '../../../components/Helpers/Error';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required('Campo obrigatório'),
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().min(6, "A senha tem que ter no minimo tem 6 caracteres").required('Campo obrigatório')
})

export function LoginCreate() {
    const { error, userLogin } = useContext(ContextAuth)
    const [errorRegister, setErrorRegister] = useState(null)

    async function handleSubmit(values) {
        const { username, email, password } = values;
        const { status, data } = await postUser({ username, email, password })
        
        if (status === 200) {
            await userLogin({ username, password });
        } else {
            const { message } = data;
            setErrorRegister(message)
        }
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        onSubmit: async (values) => handleSubmit(values),
    });


    return (
        <AnimeLeft>
            <Title>Cadastre-se</Title>
            <Form onSubmit={formik.handleSubmit}>
                <Input value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username} label="Usuário" type="text" name="username" />
                <Input value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} label="Email" type="email" name="email" />
                <Input value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} label="Senha" type="password" name="password" />
                <Error error={error || errorRegister} />
                <Button>Cadastrar</Button>
            </Form>
        </AnimeLeft>
    )
}