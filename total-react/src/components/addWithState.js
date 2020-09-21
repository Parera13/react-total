import React, {useState} from 'react';
import ToggleElement from './toggleElement';
import Card from './card';

function AddWithState() {
  const [cards, setCard] = useState([]);

  const cardBuilder = (e) => {
    e.preventDefault();
    setCard([...cards, { id:cards.length }]);
    console.log(cards);
    
  }

  return (
    <div className='addState-container'>
      <div className='button'>
        <button onClick={cardBuilder}>Add</button>
      </div>
      {cards.map( card => (
        <Card 
        cards={cards}
        setCard={setCard}
        key={card.id}
        card={card}
        />
      ))}
    </div>
  );
}

export default AddWithState;
