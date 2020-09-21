import React, { useState } from 'react';
import ToggleElement from './toggleElement';

function AddPushMethod() {
  const [count, setCount] = useState(0);
  const step = 1;

  const increment = () => {
    setCount(count + 1);
  };

  let createElement = [];
  for (let i = 0; i < count; i++) createElement.push(<ToggleElement />);

  return (
    <div>
      <button onClick={increment} className='add'>
        Add Component
      </button>
      {createElement}
    </div>
  );
}

export default AddPushMethod;
