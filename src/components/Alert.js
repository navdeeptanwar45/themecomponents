import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const colorMsg={
    red: 'Error',
    green:'Success',
    lightblue: 'Holy guacamole' ,
    darkblue: 'Holy guacamole' ,
    yellow: 'Holy guacamole' ,
    lightgrey: 'Holy guacamole' ,
    white: 'Holy guacamole' ,
    darkgrey: 'Holy guacamole' 
}
 const Alert = ({text, color = 'white', heading}) => {
    const [isFade, setIsFade] = useState(true);
    return (
        
        <div className={`alertbox ${color}-alert` + (isFade?"":" fadeOut")}>
          <div className='alert-text '>
              <p>
                <strong>{heading || colorMsg[color]}!</strong>
                &nbsp; {text}
              </p> 
          </div>
          <FontAwesomeIcon  className='alert-cross ' icon={faX}  onClick={(e)=>{setIsFade(false)}}/>
        </div>
    )
}

export default Alert
