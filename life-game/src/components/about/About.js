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
      <h3>How Did I Re-Create His 'Game of Life'?</h3>
      <p className='polyas-content'>
        Within the context of computer science, I re-created a "cellular
        automaton" as a collection of black & white cells on this grid that can
        evolve over "generations" (iterative unit of time) according to the
        rules at the bottom of this page, which are based on 1 of 2 states
        ("alive" or "dead") of neighboring cells.
      </p>
      <p className='polyas-content'>
        Before the game can start, an initial input (any collection of white
        squares) must be provided by the user. Once the "Run" button is clicked,
        the cells will begin to "evolve" according to the Conway's defined
        rules. With each passing "generation," those same rules are applied each
        time and simultaneously across all cells.
      </p>
      <h2 className='polyas-heading'>Devising a Plan</h2>
      <p className='polyas-content'>
        A mathematician named John Conway created this zero-player game in 1970
        to create a model that enabled him to study "cellular automata" (the
        plural form of "cellular automaton"). A cellular automaton is a
        collection of cells on a grid that evolve over "generations" (a unit of
        time measurement in the game) according to rules based on the "states"
        ("alive" or "dead") neighboring cells.
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
