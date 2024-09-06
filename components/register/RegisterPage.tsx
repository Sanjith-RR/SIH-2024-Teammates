import React from 'react';
import { GlobeDemo } from './ThreeGlobe';
import './RegisterPage.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const RegisterPage: React.FC = () => {
  const router =useRouter();
  const redirectToLogin=()=>{
    router.push('/login')
  }
  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200 '>
      <div className='fixed w-full h-full -top-[2%]'>
        <GlobeDemo />
      </div>
      <div className='register-container relative z-50 top-[14vh]'>
        <div className='logr'>
          <h1 className='mel-text'>Register!</h1>
          <h2 className='keel-text'>Create your account</h2>
        </div>
        <form className='register-form'>
          {/* Username input */}
          <div className="input-wrapper">
            {/* <img src="\img_user.jpeg" alt="User Icon" className="icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type='text'
              className='register-input'
              placeholder='username'
              id="username"
            />
          </div>

          {/* Email input */}
          <div className="input-wrapper">
            {/* <img src="\img_user.jpeg" alt="Mail Icon" className="icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type='email'
              className='register-input'
              placeholder='email'
              id="email"
            />
          </div>

          {/* Password input */}
          <div className="input-wrapper">
            {/* <img src="\img_lock.jpg" alt="Lock Icon" className="icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <input
              type='password'
              className='register-input'
              placeholder='password'
              id="password"
            />
          </div>

          {/* Confirm password input */}
          <div className="input-wrapper">
            {/* <img src="\img_lock.jpg" alt="Lock Icon" className="icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
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
        <div className='text-white text-center'>Already a member? <button onClick={()=>redirectToLogin()}>Sign in </button></div>
      </div>
    </main>
  );
};

export default RegisterPage;