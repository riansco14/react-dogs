import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { Button } from 'components/Forms/Button'
import { Input } from 'components/Forms/Input'
import { useFormik } from 'formik'
import { postPhoto } from 'services/request/remote'
import { postSchema } from './consts'

import { Container, Form, ImagePreview } from './styles'
import { Error } from 'components/Helpers/Error'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function UserPhotoPost() {
    const navigate = useNavigate()
    const mutation = useMutation(formData => postPhoto(formData))
    const formik = useFormik({
        initialValues: {
            nome: '',
            peso: '',
            idade: '',
            img: null,
        },
        validationSchema: postSchema,
        onSubmit: (values) => {
            const formData = new FormData()
            formData.append('img', values.img.raw)
            formData.append('nome', values.nome)
            formData.append('peso', values.peso)
            formData.append('idade', values.idade)

            mutation.mutate(formData)
        }
    })

    useEffect(() => {
        if (mutation.data) {
            navigate('/account')
        }

    }, [mutation.data])



    function handleImageFile({ target }) {
        formik.setFieldValue('img', {
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0]
        })
    }

    return (
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <Input
                    label="Nome"
                    type="text"
                    name="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    error={formik.errors.nome}
                />
                <Input
                    label="Peso"
                    type="number"
                    name="peso"
                    value={formik.values.peso}
                    onChange={formik.handleChange}
                    error={formik.errors.peso}
                />
                <Input
                    label="Idade"
                    type="number"
                    name="idade"
                    value={formik.values.idade}
                    onChange={formik.handleChange}
                    error={formik.errors.idade}
                />
                <input
                    type="file"
                    name="img"
                    id="img"
                    error={formik.errors.img}
                    onChange={handleImageFile}
                />
                {formik.errors.img ? <Error error={formik.errors.img} /> : null}

                {mutation.isLoading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}

                {mutation.isError ? <Error error={mutation.error?.response?.data?.message ? mutation.error.response.data.message : "Não foi possível cadastrar a imagem"} /> : null}
            </Form>
            <div>
                {(formik.values.img && formik.values.img.preview) ? <ImagePreview preview={formik.values.img.preview} /> : null}
            </div>
        </Container>
    )
}
