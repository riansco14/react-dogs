import React from 'react'

import {Container, Label, Input as InputContainer, Error} from './styles'

export function Input({name, label, type, value,onChange, error}) {
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <InputContainer id={name} name={name} type={type} value={value} onChange={onChange} />
            {error && <Error>{error}</Error>}
        </Container>
    )
}