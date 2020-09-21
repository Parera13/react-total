import React from 'react';
import './App.css';
import ToggleCSS from './components/toggleCSS';
import ToggleElement from './components/toggleElement';
import AddPushMethod from './components/add';
import AddWithState from './components/addWithState';
import Tweets from './components/tweets';

function App() {
  return (
    <div className='App'>
      <div className='toggle'>
        <ToggleCSS />
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
    </div>
  );
}

export default App;
