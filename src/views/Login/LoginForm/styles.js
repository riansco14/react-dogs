import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
`

export const Form = styled.form`
    margin-bottom: 2rem;
`
export const LostPassword = styled(Link)`
    display: inline-block;
    color: ${({theme})=>theme.colors.greyLight};
    padding: 0.5rem 0;
    line-height: 1;

    &::after{
        content: '';
        height: 2px;
        width: 100%;
        background: currentColor;
        display: block;
    }
`

export const Register = styled.div`
    margin-top: 4rem;
    
    & p{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const SubTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.second};
    line-height: 1;
    font-size: 2rem;

    &::after{
        content: '';
        display: block;
        background: #ddd;
        height: 0.5rem;
        width: 2rem;
        border-radius: 0.2rem;

    }
`
