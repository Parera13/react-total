import React, {useState, useEffect} from 'react';
import './App.css';
import ToggleCSS from './components/toggleCSS';
import ToggleElement from './components/toggleElement';
import AddPushMethod from './components/add';
import AddWithState from './components/addWithState';
import Tweets from './components/tweets';
import Text from './components/text';
import UseEffect from './components/useEffect';

function App() {
  const [toggle, setToggle] = useState(false)
  const [isRed, setRed] = useState(false)

  useEffect(() => {
    return () => {
      const text = document.querySelector('.text-container')
      if ( text !== null){
        console.log('letut');
        text.remove()
      }
  
    }
  }, [toggle])

  return (
    <div className='App'>
      <div className='toggle'>
        <ToggleCSS isRed={isRed} setRed={setRed}/>
        <ToggleElement />
        <AddPushMethod />
      </div>
      <div className='addElement'>
        <h1>Add Element - with state</h1>
        <AddWithState />
      </div>
      <div className="tweetsComp">
        <h1>Add Element - with map</h1>
        <Tweets />
      </div>
      <div className="UseEffect">
        <h1>UseEffect</h1>
        <Text />
        <UseEffect toggle={toggle} setToggle={setToggle}/>
      </div>
    </div>
  );
}

export default App;
