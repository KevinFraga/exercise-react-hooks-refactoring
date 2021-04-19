// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [ red, setRed ] = useState(false);
  const [ blue, setBlue ] = useState(false);
  const [ yellow, setYellow ] = useState(false);
  const [ signalColor, setSignalColor ] = useState('red');
  const context = {
    red, setRed, blue, setBlue, yellow, setYellow, signalColor, setSignalColor,
  };
  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  )
}

export default Provider;
