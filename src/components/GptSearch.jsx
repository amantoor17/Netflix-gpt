import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute top-0 left-0 w-screen h-screen -z-10'>
        <img src='/images/loginPageBgImage.jpg' className='object-cover h-full w-full brightness-60' />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
