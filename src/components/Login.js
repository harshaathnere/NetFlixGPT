import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
   const [isSignInForm, setSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
      alt="logo"></img>
      
      </div>
      <form className = ' w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700'></input>}
        <h1 className='font-bold text-white 3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
       
       

        <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700'></input>
        <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700'></input>


        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? SignUp Now" : "Already Registered" }</p>
      </form>
    </div>
  )
}

export default Login
