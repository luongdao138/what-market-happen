import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './helpers/theme';
import GlobalStyle from './GlobalStyle';
import { Header, Banner, Introduction } from './components';
import BestProducts from './components/BestProducts';
import Products from './components/Products';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Introduction />
      <BestProducts />
      <Products />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
