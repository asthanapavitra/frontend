import React, { useState } from 'react';
import './Login.css';
import { FaEnvelope } from "react-icons/fa";
import axios from 'axios';
import { GoEyeClosed, GoEye } from "react-icons/go";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLock, setIsLock] = useState(true);

  const server = "http://localhost:4000/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? 'register' : 'login';
    try {
      const response = await axios.post(server + endpoint, { username: email, password });

      if (response.status === 200) {
        window.location.href = '/dashboard'; // Redirect upon successful login
      } else {
        console.error('Login failed');
        // Handle login failure
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleClick = async() => {
    const response=await axios.get("http://localhost:4000/auth/google");
    if (response.status === 200) {
      window.location.href = '/dashboard'; // Redirect upon successful login
    } else {
      console.error('Login failed');
      // Handle login failure
    }
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const toggleLock = () => {
    setIsLock(!isLock);
  };

  return (
    <div className="login-page">
      <div className='wrapper'>
        <form onSubmit={handleLogin}>
          <h1>{isRegister ? 'Create Account' : 'Login'}</h1>
          <div className='input-box'>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} required />
            <FaEnvelope className='icon' />
          </div>
          <div className='input-box'>
            <input type={isLock ? 'password' : 'text'} onChange={(e) => setPassword(e.target.value)} placeholder='Password' value={password} required />
            {isLock ? <GoEyeClosed onClick={toggleLock} className='icon' /> : <GoEye onClick={toggleLock} className='icon' />}
          </div>
          {!isRegister && (
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password</a>
            </div>
          )}
          <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
          <div className="register-link">
            <p>{isRegister ? 'Already have an account?  ' : "Don't have an account?  "}
              <a href="#" onClick={toggleForm}>{isRegister ? 'Login' : 'Register'}</a>
            </p>
            <a className="btn btn-block google" onClick={handleGoogleClick} role="button">
              <i className="fab fa-google google-icon"></i>
              {isRegister ? "Sign Up with Google" : "Login with Google"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
