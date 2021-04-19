// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const { red, setRed, blue, setBlue, yellow, setYellow } = useContext(CarsContext);
  return (
    <div>
      <div>
        <img
          className={red ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          type="button"
          onClick={() => setRed(!red)}
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={blue ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          type="button"
          onClick={() => setBlue(!blue)}
        >
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          type="button"
          onClick={() => setYellow(!yellow)}
        >
          Move
        </button>
      </div>
    </div>
  )
}

export default Cars;
