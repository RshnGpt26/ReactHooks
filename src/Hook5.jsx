import React, { useState } from 'react'

const Hook5 = () => {
    const myData = {
        name: 'Roshan',
        age: 21,
        degree: 'BSCIT'
    }

    const [data, setData] = useState(myData);

    const updateData = () => {
        setData({ ...data, name: 'Gupta' });
    }

    return (
        <>
        <h1>Name: { data.name } & Age: { data.age } & Degree: { data.degree }</h1>
        <button onClick={ updateData }>Update Data</button>
        </>
    )
}

export default Hook5