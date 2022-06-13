import React, { useContext } from 'react'
import { BioData } from './Hook14A'

const Hook14C = () => {
    const name = useContext(BioData);
  return (
    <>
        <h1>C { name }</h1> 
    </>
  )
}

export default Hook14C
