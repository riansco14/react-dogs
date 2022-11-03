import styled from 'styled-components'
import VisualizationBlack from '../../../assets/visualizacao-black.svg'
import { scaleUp } from 'globalStyles'

export const Container = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;

    background-color: white;

    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: ${scaleUp} 0.3s forwards;


    @media (max-width: 64rem) {
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);

        img{
            grid-row: 1;
        }

    }
`

export const AuthorContainer = styled.p`
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a:hover{
        text-decoration: underline;
    }
`   

export const DetailsVisualizationsSpan = styled.span`

    &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: 0.5rem;
        background: url(${VisualizationBlack});
    }
`

export const DetailsAttributesList = styled.ul`
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;

    & li{
        margin-right: 2rem;
    }

    & li::before{
        content: '';
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background-color: black;
        margin-top: 5px;
    }

`

export const Image = styled.img`
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem 0 2rem;
`
