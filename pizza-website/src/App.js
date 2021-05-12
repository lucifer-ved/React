import React from 'react';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalstyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData}/>
      <Feature />
      <Products heading='Sweet Treats For You' data={productDataTwo}/>
      <Footer />
    </Router >
  );
}

export default App;
