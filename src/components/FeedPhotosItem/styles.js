import styled, { css } from 'styled-components'
import Visualization from '../../assets/visualizacao.svg'

export const Container = styled.li`
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

    ${props => {
    return [1, 2, 3].map(number => {
        return css`
            &:nth-child(${(number * 3) - 1}){
                grid-column: 2 / 4;
                grid-row: span 2;
            }
    `
        })
    }}
    /*
    &:nth-child(2){
        grid-column: 2 / 4;
        grid-row: span 2;
    }
    */
    

    @media (max-width: 40rem) {
        &:nth-child(n){
            grid-column: initial;
            grid-row: initial;
        }
    }

    &:hover span{
        display: flex;  
    }


`


export const Image = styled.img`
    grid-area: 1/1;
`


export const ImageNumberAccess = styled.span`
    grid-area: 1/1;

    background-color: rgba(0,0,0,0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    display: none;

    &::before{
        width: 16px;
        height: 10px;
        content: '';
        display: inline-block;
        margin-right: 0.25rem;
        background: url(${Visualization}) no-repeat;
    }
`