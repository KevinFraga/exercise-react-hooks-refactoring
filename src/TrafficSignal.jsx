import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

function TrafficSignal() {
  const { signalColor, setSignalColor } = useContext(CarsContext);

  const renderSignal = (signalColor) => {
    switch (signalColor) {
      case 'red': return redSignal;
      case 'yellow': return yellowSignal;
      case 'green': return greenSignal;
      default: return null;
    }
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => setSignalColor('red')} type="button">
          Red
        </button>
        <button onClick={() => setSignalColor('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => setSignalColor('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

export default TrafficSignal;
