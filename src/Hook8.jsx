import React from 'react'
import { useState } from 'react'

const Hook8 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (event) => {
        if(email && password) {
            event.preventDefault();
            const newEntry = { id: new Date().getTime().toString(), email, password };
            setAllEntry([...allEntry, newEntry]);
            setEmail('');
            setPassword('');
        } else{
            alert('Please fill all details properly');
        }
    }
    
  return (
    <>
        <form action="" onSubmit={ submitForm }>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email' autoComplete='off' value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' autoComplete='off' value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <button type='submit'>Login</button>
        </form>
        <div>
            {
                allEntry.map((currentElem) => {
                    const {id, email, password} = currentElem;
                    return(
                        <div key={ id }>
                            <p>{ email }</p>
                            <p>{ password }</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Hook8
