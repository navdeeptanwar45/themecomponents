import React from 'react'

const Badge = ({shape='',text,type='solid',color='primary'}) => {
  return (
    <div className={'badge-main '+(shape)+" "+(type)+" "+(color)}>
      {text}
    </div>
  )
}

export default Badge
