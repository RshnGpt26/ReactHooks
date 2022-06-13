import React from 'react'
import './Hook16.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hook16 = () => {
    const diffToast = () => {
        toast.success('Login Success', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
  return (
    <>
      <div className="main-div">
          <button className='btn btn-primary' onClick={diffToast}>Login</button>
      </div>
        <ToastContainer />
    </>
  )
}

export default Hook16


// References => 1. https://www.npmjs.com/package/react-toastify
//               2. https://fkhadra.github.io/react-toastify/introduction/