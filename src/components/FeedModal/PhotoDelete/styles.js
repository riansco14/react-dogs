import styled from 'styled-components'

export const Container = styled.div`
`

export const ButtonDelete = styled.button`
    background-color: #ddd;
    padding: 0.3rem 0.6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: 0.875rem;
    cursor: pointer;
    border-radius: 0.4rem;

    transition: 0.1s;

    &:focus,
    &:hover{
        outline: none;
        background-color: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
    }
`