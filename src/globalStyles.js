import styled, { keyframes } from "styled-components"


import { createGlobalStyle } from 'styled-components';


export const theme = {
    colors: {
        primary: '#fb1',
        primaryLight: '#fea',
        error: '#f31',
        grey: '#333',
        greyLight: '#666',
        
    },
    fonts: {
        first: 'Helvetica, Arial, sans-serif',
        second : 'Spectral, Georgia'
    }
}

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        padding-top: 4rem;
        margin: 0px;
        color: ${({theme})=>theme.colors.grey};

        font-family: ${({theme})=>theme.fonts.first};
    }

    h1,h2,h3,h4,p{
        margin: 0px;
    }

    ul,li{
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    img{
        display: block;
        max-width: 100%;
    }

    button, input{
        display: block;
        font-size: 1rem;
        font-family: ${({theme})=>theme.fonts.first};
        color: ${({theme})=>theme.colors.grey};
    }

    .container{
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }

    a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.grey};
    }
`;



export const fadeIn = keyframes`
to{
    opacity: 1;
    transform: initial;
}

`

export const AnimeLeft = styled.section`
    opacity: 0;
    transform: translateX(-20px);
    animation: ${fadeIn} 0.3s forwards;
`

export const Title = styled.h1`
    font-family: ${({theme})=>theme.fonts.second};
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;

    &::after{
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-color: ${({theme})=>theme.colors.primary};

        position: absolute;
        bottom: 5px;
        left: -5px;
        border-radius: 0.2rem;
        z-index: -1;
    }

`

export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`


export const scaleUp = keyframes`
    to {
        opacity: initial;
        transform: initial;
    }
`


export const effectLatir = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const effectSkeleton = keyframes`
    from{
        background-position:0px;
    }
    to {
        background-position:-200%;
    }
`

export const SpinLoading = styled.div`
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #fb1 transparent #fb1 transparent;
    border-radius: 50%;
    animation: ${spin} 1.2s linear infinite;
`


