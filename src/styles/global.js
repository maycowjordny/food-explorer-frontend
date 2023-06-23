import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    font-size:62.5%;
}

body{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
}

input{
    font-family: 'Roboto', sans-serif;
}

button,body{
    font-family: 'Poppins', sans-serif;
}

a{
    text-decoration: none;
}

button{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover{
    filter: brightness(0.9);
}



`