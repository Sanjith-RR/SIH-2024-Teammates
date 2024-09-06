import React from 'react';
import { GlobeDemo } from './ThreeGlobe';
import './LoginPage.css';  // Import the CSS file for styling

const LoginPage: React.FC = () => {
    // const handleGoogleLogin = async () => {
    //     try {
    //       const result = await signInWithPopup(auth, provider);
    //       console.log(result.user); // Handle successful login
    //     } catch (error) {
    //       console.error('Error during Google login:', error);
    //     }
    //   };

  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200'>
      <div className='fixed w-full h-full'>
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
            <img src="\ico_user.jpg" alt="User Icon" className="icon" />
            <input
              type='text'
              className='login-input'
              placeholder='username'
              id="userid"
            />
          </div>

          {/* Password input with icon */}
          <div className="input-wrapper">
            <img src="\ico_lock.jpg" alt="Lock Icon" className="icon" />
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
          <button type='button' className='google-login-btn'
        //    onClick={handleGoogleLogin}
           >
            Continue with Google
          </button>
        </form>
        <div className='not-yet'>
            <h3>Not a member yet? Register</h3>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
