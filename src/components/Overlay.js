import React from 'react'

const Overlay = ({children, className, onClick}) => {
  return (
    <div className={'overlay-main' + " " + className} onClick={onClick}>
      {children}
    </div>
  )
}

export default Overlay
