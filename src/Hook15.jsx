import React, { useState, useEffect } from 'react'
import useTitleCount from './useTitleCount';

const Hook15 = () => {
    const [count, setCount] = useState(0);
    
    // Custom Hook
    useTitleCount(count);
    
  return (
    <>
      <h1>{ count }</h1>
      <button onClick={ () => setCount(count+1) }>Click me</button>
    </>
  )
}

export default Hook15
