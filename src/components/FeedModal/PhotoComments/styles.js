import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const CommentListContainer = styled.ul`
   ${({ single }) => single ? css`
    `: css`
        flex: 1 1 0;
        height: 200px;
        overflow-y: auto;
    `}

`

export const CommentItemContainer = styled.li`
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
`