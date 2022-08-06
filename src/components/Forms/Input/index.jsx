import React from 'react'

import {Container, Label, Input as InputContainer, Error} from './styles'

export function Input({name, label, type}) {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <InputContainer name={name} type={type} />
            <Error>Error</Error>
        </Container>
    )
}