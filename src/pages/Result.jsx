import React from 'react' 
import { useState } from 'react';

const Result = () => {
  const [image, setImage] = useState("../src/assets/banner-2.jpeg");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  return (
    <form action="" className='flex flex-col justify-center items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className= 'relative'>
            <img src={image} alt="" className='max-w-sm rounded-t-xl'/>
            <div className='abolute bottom-0 left-0 h-2 w-full bg-blue-600 rounded-b-2xl transition-all duration-[10s]'></div>
            <p className={`text-gray-500 ${!loading ? "hidden" : ""}`}>Loading.....</p>
          </div>
          {! isImageLoaded &&
            <div className=''>
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='What you want to generate' className='flex-1 bg-amber-500 rounded-l-full px-10 sm:px-16 py-3    outline-none ml-8 max-sm:w-20'/>
              <button type='submit' className='bg-zinc-900 sm:px-16 py-3 rounded-r-full text-white'>Generate</button>
            </div>
          }
        </div>
          

      {isImageLoaded &&
      <div className='flex justify-between gap-10'>
        <button onClick={()=>{setIsImageLoaded(false)}} className=' bg-emerald-500 w-50 px-6 py-2 rounded-full'>Generate another</button>
        <a download href="" className=' bg-fuchsia-500 w-50 px-6 py-2 rounded-full text-center'>Download</a>
        </div>
      }
    </form>
  )
}

export default Result
