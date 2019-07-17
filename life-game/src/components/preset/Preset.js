import React from 'react';

import './Preset.css';

const Preset = () => {
  return (
    <div>
      <h2>Preset:</h2>
      <br />
      <div>
        <div className='individualPreset'>
          {/* <img /> */}
          <button className='presetButton'>Preset 1</button>
        </div>
        <div className='individualPreset'>
          {/* <img /> */}
          <button className='presetButton'>Preset 2</button>
        </div>
        <div className='individualPreset'>
          {/* <img /> */}
          <button className='presetButton'>Preset 3</button>
        </div>
        <div className='individualPreset'>
          {/* <img /> */}
          <button className='presetButton'>Preset 4</button>
        </div>
      </div>
    </div>
  );
};

export default Preset;

/* <div className='girlSmile'>
  <div class='Cell' style='left: 91px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 121px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 131px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 161px; top: 21px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 81px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 91px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 121px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 131px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 161px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 171px; top: 31px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 71px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 81px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 91px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 121px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 131px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 161px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 171px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 181px; top: 41px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 71px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 81px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 171px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 181px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 51px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 71px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 181px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 61px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 71px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 81px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 81px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 81px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 81px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 91px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 91px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 91px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 91px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 101px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 101px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 101px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 101px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 91px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 161px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 111px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 31px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 101px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 151px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 221px; top: 121px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 31px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 41px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 111px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 121px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 131px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 141px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 211px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 221px; top: 131px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 41px; top: 141px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 51px; top: 141px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 61px; top: 141px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 191px; top: 141px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 201px; top: 141px; width: 9px; height: 9px;' />
  <div class='Cell' style='left: 211px; top: 141px; width: 9px; height: 9px;' />
</div>; */
