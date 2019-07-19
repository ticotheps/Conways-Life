import React from 'react';

const Rules = () => {
  return (
    <div className='rules-container'>
      <h2>Rules of The Game:</h2>
      <br />
      <ol className='rules-list-container'>
        <li className='rules-content'>
          (1) Any "live" cell (a white square) with fewer than TWO live
          neighbors "dies" (becomes a black square), as if caused by
          under-population.
        </li>
        <br />
        <li className='rules-content'>
          (2) Any "live" cell (a white square) with TWO or THREE "live"
          neighbors "lives" (remains a white square) on to the next generation.
        </li>
        <br />
        <li className='rules-content'>
          (3) Any "live" cell (a white square) with more than THREE "live"
          neighbors "dies" (becomes a black square), as if by over-population.
        </li>
        <br />
        <li className='rules-content'>
          (4) Any "dead" cell (a black square) with exactly THREE "live"
          neighbors becomes a "live" cell, as if by reproduction.
        </li>
      </ol>
    </div>
  );
};

export default Rules;
