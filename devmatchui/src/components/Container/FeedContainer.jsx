import { useEffect, useRef, useState } from "react"
import Post from "../Post/Post"
import CreatePost from "../Input/CreatePost"

import { AiOutlinePlusCircle , AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useQuery , useQueryClient , useInfiniteQuery} from '@tanstack/react-query'
import { useIntersection } from '@mantine/hooks'
import { getFeed } from '../../api/post'
import { check } from "../../utils/check"
//beginginge useInfifnite Query
const FeedContainer = () => {

    const {data,fetchNextPage,hasNextPage,isFetchingNextPage,error} = useInfiniteQuery(
        ["feed"],
        async ({pageParam = 1}) => { 

            let response = await getFeed(pageParam)
            return response
        
        },
        {
            getNextPageParam: (_,pages)=>{
                return pages.length + 1
            },
            initialData:{
                pages: [],
                pageParams:[1]
            }
        }
    )

    const FEED = 'feed'
    const DISCOVER = 'discover'

    const [feedToggle,setFeedToggle] = useState(FEED)
    const [createModal, setCreateModal] = useState(false)

    const lastPostRef = useRef()
    const {ref,entry} = useIntersection({
        root : lastPostRef.current,
        threshold : 1
    
    })

    useEffect(()=>{
      
        if(entry?.isIntersecting){
            fetchNextPage()
        }
        
    },[entry])

    
    return (

        <div className="w-full bg-black relative scroll-smooth sm:px-4">
           

            <div  className="p-[4px] flex w-full max-h-[100px] mb-4 rounded-md bg-neutral-400 max-h-[100px]">
                
                <div onClick={()=>{setFeedToggle(FEED)}} className={`w-1/2 p-2 mr-[4px] center rounded-md ${check(feedToggle === FEED,'bg-black text-white','bg-neutral-400 hover:bg-neutral-300')}`}>
                    Feed
                </div>
                
                <div onClick={()=>{setFeedToggle(DISCOVER)}} className={`w-1/2 p-2 center rounded-md ${check(feedToggle === DISCOVER,'bg-black text-white','bg-neutral-400 hover:bg-neutral-300')}`}>
                    Discover
                </div>
            </div>



       
        {(feedToggle === FEED) && error && <div className="text-white p-2 bg-neutral-900 rounded-md" >Posts cannot be fetched 😔 </div> }


        
        {(feedToggle === FEED) ? 
        
                (<div className="w-full relative h-5/6 pb-16 overflow-y-scroll">
        
                {data?.pages?.map((page,index)=>{
                        
                        return <div key={index}>
                                
                                  { 
                                    page?.map(data => {
                                        return <Post key={data._id} data={data}/>
                                    })    
                                    
                                  }

                        </div>
                    })

                }

                {<div ref={ref} className="text-white bg-neutral-900 p-2 rounded-md flex justify-center items-center"> {isFetchingNextPage ? <div className=" flex justify-center items-center"><AiOutlineLoading3Quarters className="animate-spin mr-2" /><h2>Loading...</h2></div> : <div>Posts over 🤡 go touch some grass!!! 😛</div>}</div>}
                
                {createModal && <CreatePost className=""/>}  
                <button onClick={()=>{setCreateModal(!createModal)}} className="fixed bg-white bottom-6 right-6 p-2 rounded-full flex items-center"  ><AiOutlinePlusCircle className={`${check(createModal,'rotate-45','rotate-0')}`} size={36} /> </button>
        
            </div>) 
         
        :   (<div className="text-white">Match Crow</div>)

        }
        </div>
    )
}

export default FeedContainer