import { AnimeLeft } from 'globalStyles'
import styled, {css} from 'styled-components'

export const Container = styled(AnimeLeft)`
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    grid-auto-flow: column;

    gap: 2rem;
    margin-bottom: 2rem;

`

export const Form = styled.form`
    margin-bottom: 1rem;
`

export const ImagePreview = styled.div`
        width: 100%;
        height: 100%;
        background-color: #eee;

        border-radius: 1rem;
        background-size: cover;
        background-position: center center;
        
    
    ${({ preview }) => preview && css`
        background-image: url(${preview});
    `}

`