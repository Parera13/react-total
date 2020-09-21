import React from 'react'

function UseEffect({toggle, setToggle}) {
  
  return (
    <div className="useEffect">
      { toggle && <p>Toggle</p> }
      <button
      onClick={() => setToggle(!toggle)}
      >
      Give a SideEffect
      </button>
    </div>
  )
}

export default UseEffect
