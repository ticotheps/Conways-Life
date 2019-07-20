import React from 'react';
import Grid from './components/grid/Grid';
import Rules from './components/rules/Rules';
import About from './components/about/About';
import tico from './tico.jpg';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Conway's Game of Life!</h1>
      <div className='grid-about-container'>
        <Grid />
        <About />
      </div>
      <div className='rules-footer-container'>
        <Rules />
        <div className='footer-container'>
          <div className='author-container'>
            <a
              href='https://www.linkedin.com/in/ticotheps/'
              target='_blank'
              className='author-pic-link wobble-hor-bottom'
              rel='noopener noreferrer'
            >
              <img className='author-pic' src={tico} alt='author headshot' />
            </a>
          </div>
          <div>
            <p className='footer'>© Tico S. Thepsourinthone 2019</p>
            <p className='footer'>
              See more of Tico's Work at{' '}
              <a
                href='http://heytico.com'
                target='_blank'
                className='footer-plug'
                rel='noopener noreferrer'
              >
                heytico.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
