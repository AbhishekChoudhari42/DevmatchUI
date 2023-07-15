import React from 'react'

const CreatePost = () => {
    console.log("Sfsfs")
  return (
    <div className='fixed bottom-24  right-8 w-[90%] max-w-[300px] p-4 bg-black border-2 rounded-md z-50 '>
        <h1 className='text-white text-lg font-semibold mb-2' >Create Post</h1>
        <textarea className='w-full bg-neutral-900 rounded-md p-2 text-neutral-300'></textarea>
        <button className='w-full bg-blue-600 text-white font-semibold mt-2 p-2 rounded-md' >Post</button>
    </div>
  )
}

export default CreatePost