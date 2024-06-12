import React, { useState } from 'react';

const HoverCounter = () => {
  
  const [hoverCount, setHoverCount] = useState(0);

  // Function to handle the hover event
  const handleMouseOver = () => {
    setHoverCount(hoverCount + 1);
  };

  return (
    <div>
      {/* Label element with onMouseOver event */}
      <label onMouseOver={handleMouseOver} style={{ cursor: 'pointer' }}>
        Hover over me!
      </label>
      {/* Display the hover count */}
      <p>Hover count: {hoverCount}</p>
    </div>
  );
};

export default HoverCounter;