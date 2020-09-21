import React from 'react'
import Tweets from '../components/tweets'

function Tweet({platform,type,amount,modifier}) {
  return (
    <div className='tweet'>
      <div className="firstLine">
        <p>{platform}</p>
        <p>{type}</p>
      </div>
      <div className="secondLine">
        <p>{amount}</p>
        <p>{modifier}</p>
      </div>
    </div>
  )
}

export default Tweet
