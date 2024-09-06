import React from 'react';
import { GlobeDemo } from './ThreeGlobe';
import './LoginPage.css';  
import {  signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const LoginPage: React.FC = () => {
  const router =useRouter();
    // const handleGoogleLogin = async () => {
    //     try {
    //       const result = await signInWithPopup(auth, provider);
    //       console.log(result.user); // Handle successful login
    //     } catch (error) {
    //       console.error('Error during Google login:', error);
    //     }
    //   };
  const redirectToRegister=()=>{
    router.push('/register')
  }
  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200'>
      <div className='fixed w-full h-full -top-[2%]'>
        <GlobeDemo />
      </div>
      <div className='login-container relative z-50'>
        <div className='logr'>
            <h1 className='mel-text'>Login!</h1>
            <h2 className='keel-text'>Please Enter your Login and your Password</h2>
        </div>
        <form className='login-form'>
          {/* Username input with icon */}
          <div className="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type='text'
              className='login-input'
              placeholder='username'
              id="userid"
            />
          </div>

          {/* Password input with icon */}
          <div className="input-wrapper">
           {/* <img src="\img_user.jpg" alt="Lock Icon" className="google" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
            <input
              type='password'
              className='login-input'
              placeholder='password'
              id="password"
            />
          </div>

          {/* Login button */}
          <button type='submit' className='login-btn'>
            Login

        </button>
          {
           }
           {/* <img src="\ico_google.jpg" alt="Lock Icon" className="google" /> */}
          <button type='button' className='google-login-btn' onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}
           >
            Continue with Google
          </button>
        </form>
        <div className='not-yet'>
            <h3>Not a member yet? <button onClick={()=>redirectToRegister()}>Register</button></h3>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;