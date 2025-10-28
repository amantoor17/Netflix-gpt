 import React from 'react'
 
 const VideoTitle = ({title, overview}) => {
   return (
     <div className='pt-[30%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
       <h1 className='text-6xl font-bold'>{title}</h1>
       <p className='py-6 text-lg w-1/2'>{overview}</p>
       <div>
        <button className='border-0 mx-2 bg-white text-black hover:bg-white/80 hover:cursor-pointer p-4 px-12 text-xl rounded-lg'>▶ Play</button>
        <button className='border-0 mx-2 bg-gray-500/50 text-white p-4 px-12 text-xl rounded-lg'>More Info</button>
       </div>
     </div>
   )
 }
 
 export default VideoTitle;
