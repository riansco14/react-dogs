import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 1rem;
`

export const Label = styled.label`
    display: block;
    font-size: 1rem;
    line-height: 1rem;
    padding-bottom: 0.5rem;

`

export const Input = styled.input`
    display: block;
    border: 1px solid #eee;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: #eee;

    transition: 0.3s;

    &:focus,&:hover{
        outline: none;
        border-color: ${({theme})=>theme.colors.primary};
        background: white;
        box-shadow: 0 0 0 2px ${({theme})=>theme.colors.primaryLight};
    }
`


export const Error = styled.p`
    color: ${({theme})=>theme.colors.error};
    font-size: 0.875rem;
    margin-top: 0.25rem;
`

