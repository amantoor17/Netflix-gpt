import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {
    const searchText= useRef(null);

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Don, The Godfather, Intersteller, one battle after another, F1:The Movie ";

        const gptResults = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: gptQuery },
        ],
        });

        console.log(gptResults.choices[0].message.content);
    }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12 rounded-lg'
      onSubmit={(e) => e.preventDefault()}
      >
        <input 
            type='text' 
            ref={searchText}
            className='p-4 m-4 bg-white col-span-9' 
            placeholder={lang.en.gptSearchPlaceholder} />
        <button 
            className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchClick}>
            {lang.en.search}
        </button>

      </form>
    </div>
  )
}

export default GptSearchBar
