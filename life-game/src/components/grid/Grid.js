import React, { Component } from 'react';

import './Grid.css';

const CELL_SIZE = 10;
const WIDTH = 500;
const HEIGHT = 500;

class Grid extends Component {
  render() {
    return (
      <div>
        <h2>Testing</h2>
        <div className='Board' style={{ width: WIDTH, height: HEIGHT }} />
      </div>
    );
  }
}

export default Grid;
