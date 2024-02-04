import React from 'react';
import PropTypes from 'prop-types';
const Slider = ({ initialValue, setSliderValue, setterFunction }) => {
  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
    setterFunction(parseInt(e.target.value));
  };

  return (
    <div>
      <input
        className="z-10"
        type="range"
        min={10}
        max={40}
        step={1}
        value={parseInt(initialValue)}
        name={'Credit Hours'}
        onChange={handleSliderChange}
      />
      <p className="text-7xl text-blue-600 ">{initialValue}</p>
    </div>
  );
};

Slider.propTypes = {
  initialValue: PropTypes.number.isRequired,
  setSliderValue: PropTypes.func.isRequired,
  setterFunction: PropTypes.func.isRequired,
};

export default Slider;
