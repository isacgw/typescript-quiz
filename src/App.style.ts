import styled, { createGlobalStyle } from "styled-components";
import BGimg from './assets/images/wallpaper.jpg';

export const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }

    html {
        height: 100%;
    }

    body {
        background-image: url(${BGimg});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: white;

    }

    h1 {
        font-family: 'Coda', cursive;
        color: white;
        font-size: 2rem;
    }

    .score {
        color: black;
        background: white;

        font-size: 1rem;
        font-weight: 700;
        font-style: italic;

        margin: .8rem;
        padding: .3rem .5rem;

        border-radius: .5rem;
    }

    .start, .next {
        cursor: pointer;

        padding: .5rem 1rem;
        border-radius: 2rem;
        border: none;

        transition: 0.5s ease-in-out;

        :hover {
        background: transparent;
        border: 1px solid white;

        color: white;

        transform: scale(120%);
    }
    }

    .next {
        margin-top: 2rem;
    }
`