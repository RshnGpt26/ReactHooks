import React, { useState } from 'react';

const Hook1 = () => {
    const [num, setNum] = useState(0);
  return (
    <>
      <h1>{ num }</h1>
      <button onClick={ () => { setNum( num+1 ) } } >Click Me</button>
    </>
  )
};

export default Hook1;
