import React from 'react'

const ButtonGroup = ({orientation,children}) => {
  return (
    <div className={'button-group-main '+orientation}>
        {children}
     </div>
  )
}

export default ButtonGroup
