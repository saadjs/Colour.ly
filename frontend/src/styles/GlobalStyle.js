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
        background-color: #23d997;
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
`;

export default GlobalStyle;
