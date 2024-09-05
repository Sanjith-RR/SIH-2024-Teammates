import React from 'react'
import { GlobeDemo } from './ThreeGlobe'

const LoginPage = () => {
  return (
    <main className='flex w-screen h-screen items-center justify-center bg-gray-200'>
        <header className='text-white'>
            Shinka Jinzai
        </header>
        <div className='fixed w-full'>
        <GlobeDemo/>
        </div>
        <div className='relative z-50 bg-white left-28'>
            <h1>Login Page</h1>
            <form action="">
                <label>Username</label>
                <input className='bg-gray-500 block'/>
                <label>Password</label>
                <input className='bg-gray-500 block'/>
            </form>
        </div> *
    </main>
)
}

export default LoginPage