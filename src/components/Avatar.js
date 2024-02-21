import React from 'react'

const Avatar = ({size,shape,status,src,alt}) => {
    

  return (
    <div>
      <div className={'avatar-main '+(size)} >
        <div className={'avatar-img-container '+(shape)}>
        <img className='avatar-img ' src={src}  alt={alt}/>
        </div>
        <div className={'avatar-status '+(status)}> </div>

      </div>
    </div>
  )
}

export default Avatar
