import React from 'react'
import { useState } from 'react'

const Hook7 = () => {
    // const [demo, setDemo] = useState(''); // for h1 element 
    const [demo, setDemo] = useState('Check It'); // for h2 element 
  return (
    <>
      {/* <h1> { demo || 'Gupta' } </h1> */}
      <h2> { demo && 'Roshan' } </h2>
    </>
  )
}

export default Hook7
