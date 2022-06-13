import React, { createContext } from 'react'
import Hook14B from './Hook14B'

const BioData = createContext();

const Hook14A = () => {
  return (
    <>
        <BioData.Provider value={ "Roshan Gupta" }>
            <h1>A</h1>
            <Hook14B />
        </BioData.Provider>
    </>
  )
}

export default Hook14A
export { BioData };