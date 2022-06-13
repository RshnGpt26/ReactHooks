import React from 'react'
import { useState } from 'react'

const Hook4 = () => {
    const bioData = [
        {
            id: 0,
            myName: "Roshan",
            age: 21
        },
        {
            id: 1,
            myName: "Rohit",
            age: 22
        }
    ]
    const [arrayData, setArrayData] = useState(bioData);

    const clearArray = () => {
        setArrayData([]);
    }
  return (
    <>
        {
            arrayData.map((currentElem) => {
                const { id, myName, age } = currentElem;
                return <h1 key={ id }> Name: { myName } & Age: { age } </h1>
            })
        }
        <button onClick={ clearArray }>Clear Data</button>
    </>
  )
}

export default Hook4
