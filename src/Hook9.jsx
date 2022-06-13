import React, { useState, useEffect } from 'react'

const Hook9 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count === 0 ? `Chats` : `Chats(${count})`;
        console.log('First useEffect');
    }, [count]); // This useEffect will run only when count will update // Note :=> Here [count] is called Dependency List 
    useEffect(() => {
      console.log('Second useEffect');
    }, []); // This useEffect will run only first time page refresh occurs
    useEffect(() => {
      console.log('Third useEffect');
    }); // This useEffect will run when page refresh
    console.log('Hello outside'); // It has first Priority
  return (
    <>
      <h1>{ count }</h1>
      <button onClick={ () => setCount(count+1) }>Click me</button>
    </>
  )
}

export default Hook9
