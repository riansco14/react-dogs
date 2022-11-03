import { effectLatir } from 'globalStyles'
import styled from 'styled-components'

export const Container = styled.form`
    display: grid;
    grid-template-columns: 1fr auto; 
    align-items: stretch;
    margin: 1rem;
`

export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    border: none;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background-color: #eee;
    transition: 0.2s;

    &:hover,
    &:focus{
        outline: none;
        border-color: #fb1;
        background-color: white;
        box-shadow: 0 0 0 3px #fea;
    }
`

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonSend = styled.button`
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    
    &:hover ,
    &:focus {
        outline: none;
    }

    &:hover svg path,
    &:focus svg path{
        fill: #fea; 
        stroke: #fb1;
    }

    &:hover svg g,
    &:focus svg g{
        animation: ${effectLatir} 0.6s infinite;
    }


`

