import React, { useState } from 'react';

function DeleteElementCss({remove,setRemove}) {
  

  return (
    <div className='delete'>
      <button onClick={() => setRemove(!remove)} className='removeComp'>x</button>
    </div>
  )
}

export default DeleteElementCss;