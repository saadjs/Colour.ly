import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #ffffff;
}

html{
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #fffa65;
    }
    
}

a {
    color: #0060B6;
    text-decoration: none;
}

a:hover 
{
    color:#00A0C6;
    text-decoration:none; 
    cursor:pointer;  
}

button {
    cursor: pointer;
    background: transparent;
    /* transition: all 0.5s ease; */
    &:hover{
        background-color: #fff3d0;
        color: #c10000;
    }
}

h2 {
    font-weight: lighter;
    font-size: 3.5rem;
}

h3 {
    color: #000000;
}

h4 {
    font-weight: bold;
}

p {
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
