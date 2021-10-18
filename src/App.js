import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './helpers/theme';
import GlobalStyle from './GlobalStyle';
import { Header, Banner, Introduction } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Introduction />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
