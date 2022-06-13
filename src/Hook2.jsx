import React, { useState } from 'react';

const Hook2 = () => {
  const [data, setData] = useState('Roshan');
  return (
    <>
      <h1>{ data }</h1>
      <button onClick={ () => data === 'Roshan' ? setData('Gupta') : setData('Roshan') }>Click Me</button>
    </>
  )
};

export default Hook2;
