import React from 'react';

function Card({ cards, card, setCard }) {
  const deleteHandler = () => {
    setCard(cards.filter(el => el.id !== card.id));
  };
  return (
    <div className='card'>
      <u>Component</u>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className='deleteX'>
        <button onClick={deleteHandler} className='x'>
          x
        </button>
      </div>
    </div>
  );
}

export default Card;
