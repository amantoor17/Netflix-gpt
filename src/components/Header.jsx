import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44 '
        src='/images/Netflix_Logo.png'
        alt='logo'
      />
      {user && (
        <div className='flex p-2 m-2'>
          <img 
          className='w-12 h-12'
          alt='usericon' 
          src={user?.photoURL}  
          />
          <button className='text-white font-bold p-2 ml-2 bg-red-700 hover:scale-95 transition-transform duration-300' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}

    </div>
  )
}

export default Header
 