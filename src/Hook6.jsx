import React, { useState } from 'react'

const Hook6 = () => {
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

    const removeData = (id) => {
        const newArrayData = arrayData.filter((currentElem) => {
            return currentElem.id !== id;
        });
        setArrayData(newArrayData);
    }
    const clearArray = () => {
        setArrayData([]);
    }
  return (
    <>
        {
            arrayData.map((currElem) => {
                return (
                    <h1 key={ currElem.id }> Name: { currElem.myName } & Age: { currElem.age } <button onClick={ () => removeData(currElem.id) }>Remove</button> </h1>
                )
            })
        }
        <button onClick={ clearArray }>Clear Data</button>
    </>
  )
}

export default Hook6
