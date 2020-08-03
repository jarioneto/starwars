import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: #a0a0a0;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #737373;
    border-radius: 20px;
    border: 3px solid #a0a0a0;
  }

  button,
  input {
    outline: none;
    background: none;
  }

  img {
    pointer-events: none;
  }
`;
