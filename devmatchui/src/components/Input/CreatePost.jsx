import React from 'react'

const CreatePost = () => {
    console.log("Sfsfs")
  return (
    <div className='fixed bottom-24  right-6 w-[90%] max-w-[300px] p-4 bg-[#000f] border-2 border-neutral-800 backdrop-blur-md  rounded-md z-50 '>
        <h1 className='text-white text-lg font-semibold mb-2' >Create Post</h1>
        <textarea placeholder="What's on your mind ?" className='w-full border-2 border-neutral-600 bg-neutral-900 rounded-md p-2 text-neutral-300'></textarea>
        <button className='w-full bg-blue-600 text-white font-semibold mt-2 p-2 rounded-md' >Post</button>
    </div>
  )
}

export default CreatePost