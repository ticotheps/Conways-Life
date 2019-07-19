import React from 'react';

const About = () => {
  return (
    <div className='about-container'>
      <br />
      <h2 className='polyas-heading'>Understanding the Problem</h2>
      <h3>Why Did Conway Create This Model?</h3>
      <p className='polyas-content'>
        A mathematician named John Conway created this two-dimesional,
        zero-player game in 1970 to provide a visual model that would enable him
        to study "cellular automata" more closely. "Cellular automata" had
        already been studied previously by many scientists, two decades prior,
        as a possible model for biological systems. This visually-alluring 2D
        game continues to model concepts in: computer science, cryptography,
        mathematics, physics, complexity science, theoretical biology, etc.
      </p>
      <h3>What Should MY Re-Created Model Look Like?</h3>
      <p className='polyas-content'>
        Within the context of my re-created model, a "cellular automaton" would
        be considered a collection of black & white cells on this grid that can
        evolve over "generations" (iterative unit of time) according to the
        rules defined at the bottom of this page. Those rules are applied to
        each cell, during each generation, and are based on 1 of 2 states
        ("alive" or "dead") of each neighboring cell.
      </p>
      <h3>How Does It Work?</h3>
      <p className='polyas-content'>
        Before the game can start, an initial input (any collection of white
        squares) must be provided by the user, either manually on the grid or by
        choosing one of the provided preset options under the grid. After
        providing an input, the "Run" button must be clicked, which will cause
        the cells to "evolve" according to Conway's defined rules (as stated at
        the bottom of this page). With each passing "generation," those SAME
        rules are applied EVERY generation and SIMULTANEOUSLY across all cells.
      </p>
      <h2 className='polyas-heading'>Devising a Plan</h2>
      <p className='polyas-content'>
        (1) First, we need to create a board with a grid that can render black &
        white cells, which will revert between the colors when clicked on.
      </p>
      <p className='polyas-content'>
        (2) Then, we need to implement functionality to give the user the
        ability to control aspects of the game: a "Run"/"Stop" button to proceed
        or pause the cells' evolution, a "Clear" button to return to a board of
        all black cells, and a user input area that allows the user to specify
        the time between each iterated "generation".
      </p>
      <p className='polyas-content'>
        (3) Lastly, we need to give the user the option to select preset inputs.
      </p>
      <h2 className='polyas-heading'>Implementing the Plan</h2>
      <p className='polyas-content'>
        A mathematician named John Conway created this zero-player game in 1970
        to create a model that enabled him to study "cellular automata" (the
        plural form of "cellular automaton"). A cellular automaton is a
        collection of cells on a grid that evolve over "generations" (a unit of
        time measurement in the game) according to rules based on the "states"
        ("alive" or "dead") neighboring cells.
      </p>
      <h2 className='polyas-heading'>Reflecting/Iterating</h2>
      <p className='polyas-content'>
        A mathematician named John Conway created this zero-player game in 1970
        to create a model that enabled him to study "cellular automata" (the
        plural form of "cellular automaton"). A cellular automaton is a
        collection of cells on a grid that evolve over "generations" (a unit of
        time measurement in the game) according to rules based on the "states"
        ("alive" or "dead") neighboring cells.
      </p>
    </div>
  );
};

export default About;
