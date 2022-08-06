import styled from 'styled-components'

export const Container = styled.button`
    font-size: 1rem;
    font-family: Helvetica, Arial, sans-serif;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: #fb1;
    color:#764701;

    padding: 0.8rem 1.2rem;

    box-sizing: border-box;

    min-width: 8rem;

    &:focus,&:hover{
        outline: none;
        box-shadow: 0 0 0 2px #fea;
    }

    &:disabled{
        opacity: 0.5;
        cursor: wait;
    }

`