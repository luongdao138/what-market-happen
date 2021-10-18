import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --text-main: ${({ theme }) => theme.palette.text.main};
    --text-dark: ${({ theme }) => theme.palette.text.dark};
    --text-semiLight: ${({ theme }) => theme.palette.text.semiLight};
    --text-light: ${({ theme }) => theme.palette.text.light};
    --text-contrastText: ${({ theme }) => theme.palette.text.contrastText};
    --bg-primary: ${({ theme }) => theme.palette.background.primary};
    --bg-secondary: ${({ theme }) => theme.palette.background.secondary};
    --primary-main:${({ theme }) => theme.palette.primary.main};
    --primary-text:${({ theme }) => theme.palette.primary.text};
    --secondary-main:${({ theme }) => theme.palette.secondary.main};
    --secondary-text:${({ theme }) => theme.palette.secondary.text};
    --secondary-icon:${({ theme }) => theme.palette.secondary.icon};
  }

    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    body {
      background-color: var(--bg-primary);
    }

    button {
      outline: none;
      cursor: pointer;
      border: none;
    }
   
    input {
      outline: none;
    }

    a {
      text-decoration: none;
    }

    li {
     list-style: none;
    }

`;

export default GlobalStyle;
