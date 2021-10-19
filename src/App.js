import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './helpers/theme';
import GlobalStyle from './GlobalStyle';
import { Header, Banner, Introduction } from './components';
import BestProducts from './components/BestProducts';
import Products from './components/Products';
import BrandStory from './components/BrandStory';
import Issue from './components/Issue';
import Video from './components/Video';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Introduction />
      <BestProducts />
      <Products />
      <BrandStory />
      <Issue />
      <Video />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
