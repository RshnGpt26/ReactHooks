import React, { useRef, useState } from 'react'

const Hook12 = () => {

    const [show, setShow] = useState(false);

    // useRef Hook is like a useState only and it preserve the value. ( NO Render )
    const luckyName = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        console.log(luckyName);
        console.log(luckyName.current);
        console.log(luckyName.current.value);
        const name = luckyName.current.value;
        name === '' ? alert('Please Fill the data') : setShow(true)
    }
  return (
    <>
      <div>
          <form action="" onSubmit={ submitForm }>
              <div>
                  <label htmlFor="luckyName">Enter Your Lucky Name</label>
                  <input type="text" id="luckyName" ref={ luckyName } />
              </div>
              <br />
              <button type='submit'>Submit</button>
          </form>
          <p>{ show ? `Your lucky Name is ${luckyName.current.value}` : '' }</p>
      </div>
    </>
  )
}

export default Hook12
