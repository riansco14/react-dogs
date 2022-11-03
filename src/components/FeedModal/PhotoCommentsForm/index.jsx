import React from 'react'

import { ButtonSend, Container, TextArea, TextAreaContainer } from './styles'
import { ReactComponent as Enviar } from '../../../assets/enviar.svg'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postComment } from 'services/request/remote'
import { useFormik } from 'formik'
import { schema } from './consts'
import { Error } from 'components/Helpers/Error'

export function PhotoCommentsForm({ user, handleAddComment }) {
    const queryClient = useQueryClient()

    const { mutate } = useMutation((data) => postComment(user.id, data), {
        onSuccess: (data) => {
            handleAddComment(data)
            queryClient.invalidateQueries(['photo'])
        }
    })


    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            comment: ''
        },
        onSubmit: (values) => {
            mutate(values)
            formik.resetForm()
        }
    })


    return (
        <Container onSubmit={formik.handleSubmit}>
            <TextAreaContainer>
                <TextArea
                    id='comment'
                    name='comment'
                    placeholder='Comente...'
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                />
                <ButtonSend type='submit'>
                    <Enviar />
                </ButtonSend>
            </TextAreaContainer>
            <Error error={formik.errors.comment} />
        </Container>
    )
}