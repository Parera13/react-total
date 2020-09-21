import React, {useState} from 'react'

function ToggleCSS() {

const [isRed, setRed] = useState(false)

  return (
    <div className='toggleClass'>
      <h1>Toggle - Add - Remove</h1>
      <h3 className={isRed ? 'red' : ''}>Toggle a classname</h3>
      <button onClick={() => setRed(!isRed)}>Toggle ON Title </button>
    </div>
  )
}

export default ToggleCSS
