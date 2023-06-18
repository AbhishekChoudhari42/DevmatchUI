import { useState } from "react"
import Post from "../Post/Post"
import { check } from "../../utils/check"
const FeedContainer = () => {

const [feedToggle,setFeedToggle] = useState(true)


let feed = [

    { username:'User 1 ',content:'sdfa sdfs dfds fsdf',likes:30},
    { username:'User 404',content:'sdfa sdfs sd fds dfds fsdf',likes:3},
    { username:'User 69',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User s',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User sdfd',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 23',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 23',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 5',content:'sdfa sdfs  sdfdsd f',likes:30},
    { username:'User 5',content:'sdfa sdfs  sdfdsd f',likes:30},
  
  ]
  
  return (
    <div className="w-full bg-black px-2  ">
        <div  className="p-[4px] flex w-full max-h-[100px] mb-2 rounded-md bg-neutral-400 max-h-[100px]">
            
            <div onClick={()=>{setFeedToggle(!feedToggle)}} className={`w-1/2 p-2 center rounded-md ${check(feedToggle,'bg-black text-white','bg-neutral-400')}`}>
                Feed
            </div>
            
            <div onClick={()=>{setFeedToggle(!feedToggle)}} className={`w-1/2 p-2 center rounded-md ${check(!feedToggle,'bg-black text-white','bg-neutral-400')}`}>
                Discover
            </div>
        </div>

       { feedToggle ? <div className="w-full h-5/6 pb-16 overflow-y-scroll border-2 border-neutral-950 p-2">
        {
            feed && feed.map((data,index)=>{
                
                return <Post key={index} data={data}/>

            })
        }
        </div> :
           
            <div className="text-white">
                Match crow frens    
            </div>
        }
    </div>
  )
}

export default FeedContainer