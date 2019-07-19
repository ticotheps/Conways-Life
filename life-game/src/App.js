import React from 'react';
import Grid from './components/grid/Grid';
import Rules from './components/rules/Rules';
import About from './components/about/About';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Conway's Game of Life!</h1>
      <div className='grid-about-container'>
        <Grid />
        <About />
      </div>
      <Rules />
      <p className='footer'>Created by Tico S. Thepsourinthone © 2019</p>
      <p className='footer'>
        See more of Tico's Work at{' '}
        <a href='heytico.com' target='_blank' className='footer-plug'>
          heytico.com
        </a>
      </p>
    </div>
  );
}

export default App;
