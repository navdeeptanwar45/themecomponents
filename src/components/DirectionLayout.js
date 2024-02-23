import React from 'react'

const DirectionLayout = ({orientation,content,children}) => {
  return (
    <div className={'direction-layout '+orientation}>
     {content}
     {children}
    </div>
  )
}

export default DirectionLayout
