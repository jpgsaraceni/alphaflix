import { createGlobalStyle } from 'styled-components';
import background from './assets/images/keyboard-background.svg';

export default createGlobalStyle`
  * {
      margin: 0;  
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: 'Roboto', sans-serif;
  }

  body {
    background:url(${background});
    background-size: cover;
  }
`