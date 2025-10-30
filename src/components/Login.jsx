import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, reload, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async () => {
    // Validate the form data
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        // console.log("auth", auth);
        // console.log("auth.currentUser", auth.currentUser);

        await updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: `https://ui-avatars.com/api/?name=${name.current.value}`,
        });

        await reload(auth.currentUser);

         // Now get the updated user info
        const user = auth.currentUser;

        // Dispatch it to Redux
        const { uid, email: userEmail, displayName, photoURL } = user;
        dispatch(addUser({
          uid,
          email: userEmail,
          displayName,
          photoURL,
        }));
        
        console.log("User signed up:", userCredential.user);
  
      } else {
        // Sign In logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        console.log("User Found Successfully.", userCredential.user);
        navigate("/browse");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  return (
    <div>
      <Header />
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <img src='/images/loginPageBgImage.jpg' className='object-cover h-full w-full brightness-60' />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black/60 my-36 mx-auto right-0 left-0 text-white rounded-lg'
      >
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
          />
        )}

        <input
          ref={email}
          type='text'
          placeholder='Email or phone number'
          className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
        />

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-4 my-4 w-full rounded-sm bg-gray-800/80'
        />

        <p className='text-red-600'>{errorMessage}</p>

        <button
          className='p-4 my-6 bg-red-700 w-full rounded-sm hover:scale-95 transition-transform duration-300'
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className='py-4 hover:cursor-pointer hover:scale-95 transition-transform duration-300'
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
