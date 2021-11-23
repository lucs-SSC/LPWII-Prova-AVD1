import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --white: #ffff;
        --black: #000000;
        --green: #33cc95;
        --red: #dc143c;
        --blue-light: #6933ff;
        --text-tile: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto' sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }
    button {
        cursor: pointer;
    }
    
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
`