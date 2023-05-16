import React, { useState } from 'react';
import usa from '../../public/usa.svg'


function Mapp() {
  const [selectedStates, setSelectedStates] = useState([]);

  function handleStateClick(state) {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter(s => s !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  }

  return (
    <div className="map-container">
      <svg className="usa-map" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
        <image href={usa} />
        <rect className={selectedStates.includes('CA') ? 'selected' : ''} x="50" y="50" width="100" height="100" onClick={() => handleStateClick('CA')} />
        <rect className={selectedStates.includes('TX') ? 'selected' : ''} x="200" y="200" width="100" height="100" onClick={() => handleStateClick('TX')} />
        <rect className={selectedStates.includes('NY') ? 'selected' : ''} x="350" y="100" width="100" height="100" onClick={() => handleStateClick('NY')} />
        {/* Add more state rectangles here */}
      </svg>
    </div>
  );
}

export default Mapp;
