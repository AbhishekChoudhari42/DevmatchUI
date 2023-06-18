/* eslint-disable react/prop-types */
import {FcLike} from 'react-icons/fc'
const Post = ({data}) => {
  return (
    <div className="w-full bg-black text-white p-4 rounded-md mb-4 border-neutral-900 border-2">
      
      <div className="flex items-center">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-blue-700 rounded-md">

          </div>
          <h2 className="ml-4 font-bold text-lg">
              {data.username}
          </h2>
        </div>
        
      </div>

      <div className="p-2 bg-neutral-950 rounded-md mb-4">
         {data.content}
      </div>
      <div className="flex ">
        
        <FcLike/>

        <p className="text-sm text-red-100 hover:text-red-400 ml-2">
          {data.likes}
        </p>

      </div>
    </div>
  )
}

export default Post