import React, { Component } from 'react';
import Cell from './Cell';

import './Grid.css';

const smile = [
  { x: 36, y: 11 },
  { x: 14, y: 12 },
  { x: 36, y: 12 },
  { x: 14, y: 13 },
  { x: 36, y: 13 },
  { x: 14, y: 14 },
  { x: 36, y: 14 },
  { x: 14, y: 15 },
  { x: 36, y: 15 },
  { x: 14, y: 16 },
  { x: 36, y: 16 },
  { x: 14, y: 17 },
  { x: 39, y: 25 },
  { x: 11, y: 26 },
  { x: 38, y: 27 },
  { x: 13, y: 28 },
  { x: 36, y: 29 },
  { x: 14, y: 31 },
  { x: 34, y: 31 },
  { x: 17, y: 32 },
  { x: 20, y: 33 },
  { x: 23, y: 33 },
  { x: 27, y: 33 },
  { x: 31, y: 33 },
];

class Grid extends Component {
  state = {
    cells: [],
    interval: 1000,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500,
    counter: 0,
    preset: smile,
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();

  // Creates an empty board
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    // console.log(board);
    return board;
  }

  // Create cells from this.board
  makeCells() {
    let cells_copy = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells_copy.push({ x, y });
        }
      }
    }
    return cells_copy;
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    // Document.documentElement returns the Element that
    // is the root element of the document
    const doc = document.documentElement;
    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop,
    };
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({
      cells: this.makeCells(),
    });
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  handleClear = () => {
    this.board = this.makeEmptyBoard();
    this.setState({
      cells: this.makeCells(),
      counter: 0,
    });
  };

  handleRandom = () => {
    this.handleClear();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        this.board[y][x] = Math.random() >= 0.5;
      }
    }
    this.setState({
      counter: 0,
      cells: this.makeCells(),
    });
  };

  handlePreset = e => {
    this.handleClear();
    const { preset } = this.state;
    preset.forEach(item => {
      this.board[item.y][item.x] = true;
    });
    this.setState({
      counter: 0,
      cells: this.makeCells(),
    });
  };

  runIteration() {
    console.log('running iteration');
    let newBoard = this.makeEmptyBoard();
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let neighbors = this.calculateNeighbors(this.board, x, y);
        /* Checks to see if cell exists */
        if (this.board[y][x]) {
          /* Satisfies 2nd rule of Conway's Game of Life */
          if (neighbors === 2 || neighbors === 3) {
            /* This cell lives to the next generation */
            newBoard[y][x] = true;
          } else {
            newBoard[y][x] = false;
          }
        } else {
          if (!this.board[y][x] && neighbors === 3) {
            newBoard[y][x] = true;
          }
        }
      }
    }
    this.board = newBoard;
    console.log('Generation: ', this.state.counter);
    this.setState((prevState, { counter }) => ({
      cells: this.makeCells(),
      counter: prevState.counter + 1,
    }));
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.cols &&
        y1 >= 0 &&
        y1 < this.rows &&
        board[y1][x1]
      ) {
        neighbors++;
      }
    }

    return neighbors;
  }

  render() {
    const {
      cells,
      interval,
      isRunning,
      CELL_SIZE,
      WIDTH,
      HEIGHT,
      counter,
    } = this.state;

    return (
      <div>
        <h2>Generation: {counter}</h2>
        <br />
        <div
          className='Board'
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {cells.map(cell => (
            <Cell
              CELL_SIZE={CELL_SIZE}
              x={cell.x}
              y={cell.y}
              key={`${cell.x}, ${cell.y}`}
            />
          ))}
        </div>
        <div className='controls'>
          Update every
          <input
            value={interval}
            onChange={this.handleIntervalChange}
          /> msec{' '}
          {isRunning ? (
            <button className='button' onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className='button' onClick={this.runGame}>
              Run
            </button>
          )}{' '}
          <button className='button' onClick={this.handleRandom}>
            Random
          </button>
          <button className='button' onClick={this.handleClear}>
            Clear
          </button>
          <button
            className='button'
            onClick={e => this.handlePreset(e)}
            value='smile'
          >
            Smiley
          </button>
          <button className='button' onClick={this.handlePreset}>
            Preset 2
          </button>
          <button className='button' onClick={this.handlePreset}>
            Preset 3
          </button>
          <button className='button' onClick={this.handlePreset}>
            Preset 4
          </button>
        </div>
      </div>
    );
  }
}

export default Grid;
