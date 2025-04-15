import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col gap-20 justify-center items-center text-center text-gray-800 py-30'>
        <div className='flex flex-col gap-6'>
            <h2 className='text-5xl font-semibold'>Create AI Images</h2>
            <p className='text-gray-500'>Turn your imagination into visuals</p>
        </div>
        <div className='flex flex-row justify-between gap-20 text-start'>
            <img src="../src/assets/banner-1.jpeg" alt=""  className='w-100 h-auto rounded-2xl '/>
            <div className='flex flex-col justify-center gap-8 w-150'>
                <h2 className='text-3xl font-medium'>Introducing the Al-Powered Text to Image Generator</h2>
                <p className='text-gray-600'>Easily bring your ideas to life with our free Al image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>

                <p className='text-gray-600'>Simply type in a text prompt, and our cuffing-edge Al will generate high- quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly.Powered by advanced Al technology, the creative possibilities are limitless!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Description
