import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-10'>
      <div className='bg-white rounded-full text-stone-500 inline-flex gap-2 py-2 px-6 border border-neutral-500'>
        <p className=''>Best text to image editor <i className='fa fa-star text-amber-200'></i></p>
      </div>
      <h1 className='text-4xl sm:text-7xl sm:max-w-[590px] max-w-p[300px] text-gray-950 mx-auto mt-10'>Turn text to <span className='text-blue-500'>image</span>,in seconds.</h1>
      <p className='text-gray-600 text-xl mx-auto my-8 max-w-xl'>Unleash your creativity with Al. Turn your imagination into visual art in seconds —just type, and watch the magic happen.</p>
      
      <button className='sm:text-lg bg-gray-950 rounded-full px-10 py-4 mt-8'>Generate Images</button>
    </div>
  )
}

export default Header
