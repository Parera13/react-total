import React, { useState } from 'react';
import Logo from '../img/logo192.png';
import NestedToggleElement from './nestedToggleElement';
import DeleteElementCss from './deleteElementCss';

function ToggleElement() {
  const [toggle, setToggle] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <div className='toggleElement-wrapper' id={remove ? 'remove' : ''}>
      <u>Component</u>
      <p className='click'>click</p>
      <p className='arrow'>⬇︎</p>
      <div className='toggleElement'>
        <img src={Logo} alt='logo' onClick={() => setToggle(!toggle)} />
        {toggle && <NestedToggleElement />}
      </div>
      <DeleteElementCss remove={remove} setRemove={setRemove}/>
    </div>
  );
}

export default ToggleElement;
