import React, { useState } from 'react'
import './Login.css'
import { FaUser, FaLock, FaEnvelope} from "react-icons/fa";

const Login=()=>{

  const [isRegister, setISRegister]=useState(false);

  const toggleForm = ()=>{
    setISRegister(!isRegister)
  }

  const [isLock, setIsLock]=useState(true);

  const toggleLock = () =>{
    setIsLock(!isLock);
  }

  return(
    <div className="login-page">
      <div className='wrapper'>
      <form action="">
        <h1>{isRegister?'Create Account':'Login'}</h1>
        {isRegister && (
          <div className='input-box'>
            <input type="email" placeholder='Email' required/>
            <FaEnvelope className='icon' />
          </div>
        )}
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type={isLock?'password':'text'} placeholder='Password' required/>
          <FaLock onClick={toggleLock} className='icon'/>
        </div>
        {!isRegister && (
          <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        )}

        <button type="submit">{isRegister?'Register':'Login'}</button>

        <div className="register-link">
          <p>{isRegister?'Already have an account?  ': "Don't have an account?  "}<a href="#" onClick={toggleForm}>{isRegister?'Login':'Register'}</a></p>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Login
