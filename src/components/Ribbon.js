import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'

const Ribbon = ({orientation,type,color}) => {
  return (
    <div className={'ribbon-main '+orientation}> 
    <div className='ribbon-wrapper'>
    <div className={'ribbon '+type+' '+color}><FontAwesomeIcon icon={faGift} /></div>
    </div>
    <div className='ribbon-text'> 
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    </div>
  )
}

export default Ribbon
