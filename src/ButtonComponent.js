import React, { useState } from 'react';
import './styles.css'; // Zaimportuj plik ze stylami (jeśli używasz)


const ButtonWithRandomPosition = () => {
  const [position, setPosition] = useState({ x: '40%', y: '50%' });

  const handleButtonClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <button
      className='custom-button '
      onClick={handleButtonClick}
      style={{ position: 'absolute', top: position.y, left: position.x }}
    >
      NIE
    </button>
  );
};

export default ButtonWithRandomPosition;
