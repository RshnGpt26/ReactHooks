import React, { useEffect, useState } from 'react'

const Hook10 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);
    const actualWidth = () => {
        setWidthCount(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", actualWidth);
        return () => {
            window.removeEventListener("resize", actualWidth)
        } // This is Called CleanUp Function
    });
  return (
    <>
      <p>The actual size of the window is</p>
      <h1>{ widthCount }</h1>
    </>
  )
}

export default Hook10
