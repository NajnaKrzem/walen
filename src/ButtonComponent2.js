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
          {/* <img src="C:\Users\Najna\walen\projekt\lotus.jpg" alt="Zdjęcie" /> */}
          <img style={{maxWidth:"40%"}}src={require('./lotus.JPG')} />
          <p className='decyzja'>DOBRA DECYZJA! </p>
        </div>
      )}
    </>
  );
};

export default Button2;
