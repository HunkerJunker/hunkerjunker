import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #faf555;
    --secondary-color: #2b3e3f;}

  body {
    padding:0;
    margin:0;
    background-color:black;
    color:white;  
  }
  p{
    font-family: var(--font-anton);
  }
  a{
    font-family: var(--font-barlow);;
  }
  h2,h3,h4{
    font-family: var(--font-anton);;
  }

`;
