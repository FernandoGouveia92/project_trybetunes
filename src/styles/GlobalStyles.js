import { createGlobalStyle } from 'styled-components';

// #F1F6F9
// #394867
// #212A3E
// #9BA4B5

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue';
    background-color: #212A3E;
  }
`;

export default GlobalStyles;
