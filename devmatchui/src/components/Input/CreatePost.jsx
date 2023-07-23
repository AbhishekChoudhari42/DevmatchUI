import React,{useState} from 'react'
import {useMutation,useQueryClient} from '@tanstack/react-query'
import { createPost } from '../../api/post'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const CreatePost = () => {

  const [content,setContent] = useState("")

  const queryClient = useQueryClient()

  const newPostMutation = useMutation({
  
    mutationFn: async (content) => { await createPost(content) },  
    onSuccess: ()=>{

      console.log(newPostMutation)
      queryClient.invalidateQueries(["feed"])
  
    }
  
  })
  
  return (
  
    <div className='fixed bottom-24 right-6 w-[90%] max-w-[300px] p-4 bg-[#000f] border-2 border-neutral-600 border-dashed   backdrop-blur-md  rounded-md z-50'>
    
        <h1 className='text-white text-lg font-semibold mb-4' >Create Post</h1>
        <textarea value={content} onChange={(e)=>{setContent(e.target.value)}}  placeholder="What's on your mind ?" className='w-full border-2 border-neutral-600 bg-neutral-900 rounded-md p-2 mb-4 text-neutral-300'></textarea>
        <button disabled={newPostMutation.isLoading} onClick={()=>{ newPostMutation.mutate(content) }} className='w-full bg-blue-600 text-white font-semibold  p-2 rounded-md flex justify-center items-center' >{newPostMutation.isLoading ? <AiOutlineLoading3Quarters size={24} className="animate-spin mr-2" /> : "Post" }</button>
    
    </div>
  
  )

}

export default CreatePost