import React from 'react';
import Grid from './components/grid/Grid';
import Rules from './components/rules/Rules';
import About from './components/about/About';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Conway's Game of Life</h1>
      <div className='grid-about-container'>
        <Grid />
        <About />
      </div>
      <Rules />
    </div>
  );
}

export default App;
