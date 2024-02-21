import React from 'react'

const Card = ({image='',heading,text,children}) => {
  return (
    <div className='card-main'>
        <div className='card-head-div'> 
           { image&&<img className='card-img' src={image}/>}
               <div className='card-heading-div'>{heading}</div>
        </div>
        <div className='card-body-div'>{text}
       <div className='card-children'>
        {children}
        </div> 
        </div>

      
    </div>
  )
}

export default Card
