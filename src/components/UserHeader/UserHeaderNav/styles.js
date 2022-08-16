import styled, { css } from 'styled-components'

export const Container = styled.nav`
    ${({ mobile, mobileMenu }) => mobile ?
        css` 
            display: block;
            position: absolute;
            top: 70px;
            right: 0px;
            padding: 0 1rem;
            background: white;
            box-shadow: 0 1px 2px rgba(0,0,0,0.2);
            border-radius: 0.2rem;
            transform: translateX(-10px);
            opacity: 0;
            pointer-events: none;
            
            ${mobileMenu && css`
                transition: 0.3s;
                transform: initial;
                opacity: 1;
                pointer-events: initial;
                z-index: 100;
            `}
            
            & a,
            & .buttonLogout{
                display: flex;
                align-items: center;
                background: none;
                width: 100%;
                border: none;
                border-bottom: 1px solid #eee;
                padding: 0.5rem 0;
                cursor: pointer;
            }

            & a:hover svg > *,
            & .buttonLogout:hover svg> *
             {
                fill: #fb1;                
            }

            & .buttonLogout{
                border-bottom: none;
            }
    `:
    css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;

        & a,
        & .buttonLogout{
            background-color: #eee;
            border-radius: 0.2rem;
            height: 40px;
            width: 40px;
            
            display: flex;
            justify-content: center;
            align-items: center;

            border: 1px solid transparent;
            transition: 0.1s;
            cursor: pointer;
        }

        & a:hover,
        & .buttonLogout:hover,
        & a:focus,
        & .buttonLogout:focus{
            background: white;
            box-shadow: 0 0 0 3px #eee;
            border-color: #333;
            outline: none;
        }

        & a.active{
            background-color: white;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
        }

        & a.active svg > *{
            fill: #fb1;
        }
    `}
`

export const MobileButton = styled.button`
    background-color: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    

    &::after{
        content: '';
        display: block;
        width: 1.2rem;
        height: 2px;
        border-radius: 2px;
        background-color: currentColor;

        box-shadow: 0 6px currentColor, 0 -6px currentColor;
        transition: 0.2s;
    }

    ${({ mobileMenu }) => mobileMenu && css`
        &:focus,
        &:hover{
            outline: none;
            background: white;
            box-shadow: 0 0 0 3px #fea;
            border-color: #fb1;
            color: #fb1;
        }

        &::after{
            transform: rotate(-90deg);
            width: 4px;
            height: 4px;
            box-shadow: 0 8px currentColor, 0 -8px currentColor;
        }
    
    `}
    
`
