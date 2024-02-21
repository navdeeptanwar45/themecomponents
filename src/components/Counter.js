import React from 'react'

const Counter = ({heading,count}) => {
  return (
    <div className='counter-main'>
       <div className='counter-heading'>
         <h1 style={{margin:0}}>{heading}</h1>
        </div>
        <div className='counter-text'>
      <h3>
        {count}
        </h3>
        </div>
    </div>
  )
}

export default Counter
