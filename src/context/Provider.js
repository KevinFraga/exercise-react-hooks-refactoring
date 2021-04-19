// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [ red, setRed ] = useState(false);
  const [ blue, setBlue ] = useState(false);
  const [ yellow, setYellow ] = useState(false);
  const contextValue = {
    red,
    setRed,
    blue,
    setBlue,
    yellow,
    setYellow,
  };
  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  )
}

export default Provider;
