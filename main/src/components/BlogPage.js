import React,{useState,useEffect} from 'react'
import Comment from './Comment';
import './Style.css'
const getBlogsFromLS = () =>{
    const data  = localStorage.getItem('Blogs');
    if(data){
        return JSON.parse(data);
    }
    else{
        return []
    }
}

const BlogPage = () => {
    
    const[post,setPost] = useState(getBlogsFromLS());
    const[postSave,setPostSave] = useState(""); 

    const handleSubmit = (e) =>{
        e.preventDefault();
      
        setPostSave(post);
    }

    useEffect(()=>{
        localStorage.setItem('Blogs',JSON.stringify(post));
    },[post]);
    

    console.log(post);

  return (
    <>
    <div className='main-container'>
      <div className='post-flexbox'>
      <div className='post-text'>  discussion forum</div>
    
      <div className='blog-post'>  {postSave}</div>
   
      </div>
    </div>
   
 
        
         <div className='form'>
      <form onSubmit={handleSubmit}>
            <textarea className='input-box' style={{width:"1400px"}}  type="text" onChange={(e)=>setPost(e.target.value)}/>
            <button className='post-button'
             type='submit'>
             Post
             </button>
      </form>
     
    </div>
      <div>
      <Comment/>
      </div>
 
    </>

  )
}

export default BlogPage