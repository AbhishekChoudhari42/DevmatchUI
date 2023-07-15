import { useState } from "react"
import Post from "../Post/Post"
import { check } from "../../utils/check"
import {AiOutlinePlusCircle} from 'react-icons/ai'
import CreatePost from "../Input/CreatePost"

const FeedContainer = () => {


const FEED = 'feed'
const DISCOVER = 'discover'
const [feedToggle,setFeedToggle] = useState(FEED)
const [createPost, setCreatePost] = useState(false)

let feed = [

    { username:'User 1 ',content:"If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.",likes:30},
    { username:'User 404',content:"We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear. ",likes:300},
    { username:'User 69',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User s',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User sdfd',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 23',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 23',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 5',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 5',content:'sdfa sdfs  sdfdsd f',likes:30},
  
  ]
  
  return (
    <div className="w-full bg-black relative px-2 ">
        {createPost && <CreatePost className=""/>}
        <div  className="p-[2px] flex w-full max-h-[100px] mb-4 rounded-md bg-neutral-400 max-h-[100px]">
            
            <div onClick={()=>{setFeedToggle(FEED)}} className={`w-1/2 p-2 center rounded-md ${check(feedToggle === FEED,'bg-black text-white','bg-neutral-400')}`}>
                Feed
            </div>
            
            <div onClick={()=>{setFeedToggle(DISCOVER)}} className={`w-1/2 p-2 center rounded-md ${check(feedToggle === DISCOVER,'bg-black text-white','bg-neutral-400')}`}>
                Discover
            </div>
        </div>

       { (feedToggle === FEED) ? (<div className="w-full relative h-5/6 pb-16 overflow-y-scroll">
        {
            feed && feed.map((data,index)=>{
                
                return <Post key={index} data={data}/>

            })


        }

        {/* add post button */}

        <button onClick={()=>{setCreatePost(!createPost)}} className="fixed bg-white bottom-8 right-6 p-2 rounded-full flex items-center"  ><AiOutlinePlusCircle className={`${check(createPost,'rotate-45','rotate-0')}`} size={36} /> </button>




        </div>) : 
           
           (<div className="text-white">

                        Match crow frens  
                          
           </div>)
        }
    </div>
  )
}

export default FeedContainer