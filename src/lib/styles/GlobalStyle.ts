import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;    
  }

  html,
  body,  
  #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    line-height: 1.5;    
  }

  /* ul, 
  ol{
    list-style: none;
  } */
`;

export default GlobalStyle;
