import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute top-0 left-0 w-full h-screen'>
        <img
          src='src/images/loginPageBgImage.jpg'
          className='object-cover w-full h-full brightness-40'
        />

      </div>
      <form className='w-3/12 absolute  p-12 bg-black/60 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input
          type='text'
          placeholder='Full Name'
          className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
        />)}
        <input
          type='text'
          placeholder='Email or phone number'
          className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-sm hover:scale-95 transition-transform duration-300'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer hover:scale-95 transition-transform duration-300' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login
