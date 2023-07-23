import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const CREATE_POST = "/posts/createpost"

export const getFeed = async (page) =>{

    console.log(API_BASE_URL)
    const GET_FEED = `/posts/feed?page=${page}&limit=5`

    try{

        let res =  await axios.get(`${API_BASE_URL}${GET_FEED}`)
        return res.data?.posts
    }
    catch(err){

        return err
    }
    
}

export const createPost = async (content) =>{
    
    try{

        let res =  await axios.post(`${API_BASE_URL}${CREATE_POST}`,{
            user: "246813579",
            content: content
        })

    }
    catch(err){
        return err
    }
    

}


export const likePost = async (status,postID) => {


    const POST_LIKE = `/like/${status}`
    try{
        
        let res = await axios.post(`${API_BASE_URL}${POST_LIKE}`,{
            user_githubId : "123456789",
            postID: postID
        })
        return res
    }
    catch(err){
        console.log(err)
        return err
    }


}