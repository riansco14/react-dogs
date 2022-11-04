import { effectSkeleton } from 'globalStyles'
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
`

export const Skeleton = styled.div`
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${effectSkeleton} 1.5s infinite linear;
`

export const ImageTag = styled.img`
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
`