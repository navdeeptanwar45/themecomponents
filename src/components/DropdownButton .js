import React,{useState} from 'react'
import Button from './Button'
const DropdownButton = ({heading, name ,data=[],onClick=()=>{}, fields={}}) => {
    const {text,value} = fields;

    const [show, setShow] = useState('')

  return (
    <div className='dropdown-button-main' onMouseLeave={()=>setShow(false)}>
      <div className='dropdown-button-head'>
      <Button onClick={()=>setShow((prev)=>!prev)} dropDown={true}>{heading}</Button>
      </div>
      <div className={'dropdown-button-content '+(show?'active':'')} >
       {data.map((item, index)=>{
          return(
            <p key={`data${index}`} onClick={()=>onClick({name, value:item[value], item })}>{item[text]}</p>
          )
        })}
      </div>
                        
    </div>
  )
}

export default DropdownButton
