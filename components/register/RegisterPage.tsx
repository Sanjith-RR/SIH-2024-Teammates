import React from 'react';
import { GlobeDemo } from './ThreeGlobe';
import './RegisterPage.css';
import { signIn } from 'next-auth/react';

const RegisterPage: React.FC = () => {
  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200'>
      <div className='fixed w-full h-full'>
        <GlobeDemo />
      </div>
      <div className='register-container relative z-50'>
        <div className='logr'>
          <h1 className='mel-text'>Register!</h1>
          <h2 className='keel-text'>Create your account</h2>
        </div>
        <form className='register-form'>
          {/* Username input */}
          <div className="input-wrapper">
            <img src="\img_user.jpeg" alt="User Icon" className="icon" />
            <input
              type='text'
              className='register-input'
              placeholder='username'
              id="username"
            />
          </div>

          {/* Email input */}
          <div className="input-wrapper">
            <img src="\img_user.jpeg" alt="Mail Icon" className="icon" />
            <input
              type='email'
              className='register-input'
              placeholder='email'
              id="email"
            />
          </div>

          {/* Password input */}
          <div className="input-wrapper">
            <img src="\img_lock.jpg" alt="Lock Icon" className="icon" />
            <input
              type='password'
              className='register-input'
              placeholder='password'
              id="password"
            />
          </div>

          {/* Confirm password input */}
          <div className="input-wrapper">
            <img src="\img_lock.jpg" alt="Lock Icon" className="icon" />
            <input
              type='password'
              className='register-input'
              placeholder='confirm password'
              id="confirm-password"
            />
          </div>

          {/* Register button */}
          <button type='submit' className='register-btn'>
            Register
          </button>

          {/* Google login button */}
          <button
            type='button'
            className='google-login-btn'
            onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}
          >
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;