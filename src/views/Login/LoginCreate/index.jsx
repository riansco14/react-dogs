import React, { useContext, useEffect } from 'react'
import { AnimeLeft, Title } from '../../../globalStyles'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { Form } from './styles';
import { Button } from '../../../components/Forms/Button';
import { Input } from '../../../components/Forms/Input';
import { ContextAuth } from '../../../hooks/useAuth';
import { Error } from '../../../components/Helpers/Error';
import useAxiosFunction from '../../../hooks/useAxiosFunction';

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required('Campo obrigatório'),
    username: Yup.string().required('Campo obrigatório'),
    password: Yup.string().min(6, "A senha tem que ter no minimo tem 6 caracteres").required('Campo obrigatório')
})

export function LoginCreate() {
    const { error, userLogin } = useContext(ContextAuth)

    const [response, errorRegister, loading, axiosFetch] = useAxiosFunction()


    async function handleSubmit(values) {
        const { username, email, password } = values;
        await axiosFetch({method: 'post', url: 'api/user' , requestConfig: { username, email, password }})
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

    
    useEffect(() => {
        if (response && !errorRegister) {
            const { username, password } = formik.values
            userLogin({ username, password })
        }
    }, [loading])


    return (
        <AnimeLeft>
            <Title>Cadastre-se</Title>
            <Form onSubmit={formik.handleSubmit}>
                <Input value={formik.values.username} onChange={formik.handleChange} error={formik.errors.username} label="Usuário" type="text" name="username" />
                <Input value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} label="Email" type="email" name="email" />
                <Input value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password} label="Senha" type="password" name="password" />
                <Error error={error || errorRegister} />
                {loading?<Button disabled={true}>Carregando...</Button>:<Button>Cadastrar</Button>}
            </Form>
        </AnimeLeft>
    )
}