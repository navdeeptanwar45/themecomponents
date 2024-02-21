import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight,faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({row=[1,2,3,4,,5,6,7,8],currentPage=5,jump,next,prev}) => {
  return (
    <div className='pagination-div'>
      <button  className={'pagination-btn extreme'} onClick={prev}> <FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
      {row.map((item,i)=>{
        return(<button key={i} className={'pagination-btn '+(currentPage==item?"active":" ")} onClick={()=>{jump(item)}}>{item}</button>)
      })}
      <button className={'pagination-btn extreme'} onClick={next}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>

    </div>
  )
}

export default Pagination
