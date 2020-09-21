import React from 'react'
import data from '../data'
import Tweet from './tweet'

function Tweets() {
  return (
    <div className='tweets'>
      {data.events.map(events => (
        <Tweet 
        platform={events.platform}
        type={events.type}
        amount={events.amount}
        modifier={events.modifier}
        />
      ))}
    </div>
  )
}

export default Tweets
