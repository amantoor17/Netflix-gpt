import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
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

  useEffect (() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse");
        
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
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
          <button 
          onClick={handleGptSearchClick}
          className='px-4 py-2 bg-red-700 font-bold text-white rounded-md hover:rounded-lg mr-16 hover:scale-95 hover:cursor-pointer transition-transform duration-300'>GPT Search</button>
          <img 
          className='w-12 h-12'
          alt='usericon' 
          src={user?.photoURL}  
          />
          <button className='text-white font-bold p-2 ml-2 bg-red-700 hover:scale-95 hover:cursor-pointer transition-transform duration-300' onClick={handleSignOut}>Sign Out</button>
        </div>
      )}

    </div>
  )
}

export default Header
 