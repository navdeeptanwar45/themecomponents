import React from 'react'

const TimelineCard = ({imgSrc,text,heading,direction='right'}) => {
  return (
    <div className={'timeline-card '+direction}>
        <div className='timeline-image-container'>
      <img  className='timeline-image' src={imgSrc} />
        </div>
        <div className='timeline-card-body'>
        <div className='timeline-content'>
        <h1 className='timeline-heading'>{heading}</h1>
        <div className='timeline-text'>{text}</div>
      </div>
      <span className={'timeline-card-arrow left '+direction}></span>
        </div>
     
    </div>
  )
}

export default TimelineCard
