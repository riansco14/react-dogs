import styled from 'styled-components'

export const Container = styled.button`
    font-size: 1rem;
    font-family: ${({theme})=>theme.fonts.first};
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: ${({theme})=>theme.colors.primary};
    color:#764701;

    padding: 0.8rem 1.2rem;

    box-sizing: border-box;

    min-width: 8rem;

    &:focus,&:hover{
        outline: none;
        box-shadow: 0 0 0 2px ${({theme})=>theme.colors.primaryLight};
    }

    &:disabled{
        opacity: 0.5;
        cursor: wait;
    }

`