import React, { useState } from 'react';

const Button2 = ({buttonclicked}) => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
    buttonclicked(true);
  };

  return (
    <>
      {!showContent ? (
        <button 
        className='custom-button2 '
        onClick={handleClick}>TAK</button>
      ) : (
        <div className='potak'>
          <img src="ścieżka/do/zdjęcia.jpg" alt="Zdjęcie" />
          <p>Dobra decyzja </p>
        </div>
      )}
    </>
  );
};

export default Button2;
