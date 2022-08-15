import styled from 'styled-components'

export const Container = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;


    & a,
    & button{
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
    & button:hover,
    & a:focus,
    & button:focus{
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


`