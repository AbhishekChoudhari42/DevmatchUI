/* eslint-disable react/prop-types */
import {FcLike} from 'react-icons/fc'
import {BiCommentDetail} from 'react-icons/bi'
import {RiSendPlaneFill,RiUserFollowLine,RiUserFollowFill} from 'react-icons/ri'
import { useState } from 'react'
import userImage from '../../assets/user.jpg'
import { likePost } from '../../api/post'

import { useMutation , useQueryClient} from '@tanstack/react-query'


const Post = ({data}) => {

  const queryClient = useQueryClient()

  const [isLiked,setIsLiked] = useState(false)


  const likePostMutation = useMutation({
    mutationFn:(status,postID) => likePost(status,postID),
    onSuccess: ()=>{
      console.log("liked")
      queryClient.invalidateQueries(["feed"])
    }
  })

  const [follow,setFollow] = useState(true)

  return (
    <div className="w-full bg-black text-white p-4 rounded-md mb-4 border-neutral-900 border-2">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center ">
 
          <img className='w-8 h-8 rounded-md' src={userImage} alt="" />

          <h2 className="ml-4 font-bold text-lg">
              {data.user}
          </h2>

        </div>

          {follow ? <RiUserFollowLine onClick={()=>{setFollow(false)}} size={20}/> : <RiUserFollowFill color='#f2f' onClick={()=>{setFollow(true)}} size={20}/>}
      </div>

      <div className="p-2 text-md bg-neutral-950 rounded-md mb-4 leading-8">
         {data.content}
      </div>
      <div className="flex items-center ">
        
        <FcLike onClick={()=>{likePostMutation.mutate("liked",data._id)}} color='green' className=' mb-[2px]'/>
       
        <p className="text-sm text-red-100 hover:text-red-400 ml-4">
          {data.likes?.length}
        </p>

        <BiCommentDetail className='ml-8' />

        <p className="text-sm text-red-100 hover:text-red-400 ml-4">
          {data.likes?.length}
        </p>

        <RiSendPlaneFill className='ml-8' />
      </div>
    </div>
  )
}

export default Post