import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

const Button = ({size='medium',shape='',type='solid',color='primary', isLoading=false, onClick=()=>{},children,dropDown=false}) => {
    return (
    <>
        
            <button  className={'button-main '+size+' '+shape+' '+type+' '+color} disabled={isLoading} onClick={onClick}>
            <Loader isLoading={isLoading}/>
                <p className='capitalize'>{children}</p> 
                {dropDown&& <FontAwesomeIcon icon={faChevronDown}  />}
            </button>
        
    </>
  )
}

export default Button
