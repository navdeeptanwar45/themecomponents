import React from 'react'

const BreadCrumbs = ({items=[]}) => {
  return (
    <div className='breadcrumb-main'>
         <ul className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item capitalize">
            {index !== items.length - 1 ? (
              <a href={item.url}>{item.text+' /'}</a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BreadCrumbs
