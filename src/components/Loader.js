import React from 'react'

const Loader = (props) => {
    const {isLoading} = props;
  return (
    <>
        {isLoading && <div className='loader-spinner'></div>}
    </>
  )
}

export default Loader
