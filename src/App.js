import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './helpers/theme';
import GlobalStyle from './GlobalStyle';
import { Header, Banner, Introduction } from './components';
import BestProducts from './components/BestProducts';
import Products from './components/Products';
import BrandStory from './components/BrandStory';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Introduction />
      <BestProducts />
      <Products />
      <BrandStory />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
