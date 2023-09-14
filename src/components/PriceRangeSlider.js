import React, { useState } from 'react';
import Slider from 'react-slider';

const PriceRangeSlider = () => {
  const [value, setValue] = useState([0, 100]); // Initial price range values

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="price-range-slider" style={{ width: '870px' }}>
      <Slider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleChange}
        withBars
      />
      <div className="range-labels">
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
