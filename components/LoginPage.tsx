import React from 'react'
import { GlobeDemo } from './ThreeGlobe'

const LoginPage = () => {
  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200'>
        <GlobeDemo/>
        <div>
            <h1>Login Page</h1>
            <form action="">
                <label>Username</label>
                <input className='bg-gray-100 block'/>
                <label>Password</label>
                <input className='bg-gray-100 block'/>
            </form>
        </div>
    </main>
)
}

export default LoginPage