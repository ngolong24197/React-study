import React from 'react';

const AIButton = ({onClick}) => {
  return (
    <div className='AIButton-wrapper'>
      <div className='AIButton-box flex'>
        <h1 className='AIButton-heading'>Are you ready for your Recipe? </h1>
        <p>Click the button to generate the recipe based on your list of ingredients</p>
        <button className='AIButton-button' onClick={onClick}>Generate Recipe</button>
      </div>
    </div>
  );
};

export default AIButton;
