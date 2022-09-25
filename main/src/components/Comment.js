import React ,{useState,useEffect}from 'react'
import './Style.css';
const getCommentFromLS = () =>{
  const data  = localStorage.getItem('Comments');
  if(data){
      return JSON.parse(data);
  }
  else{
      return []
  }
}


const Comment = () => {
  const[comment,setComment] = useState("");
  const[commentarr,setCommentArr] = useState(getCommentFromLS());

  const handleSubmit = (e) =>{
      e.preventDefault();
      setCommentArr([...commentarr,comment]);
      setComment("");
  }

  useEffect(()=>{
      localStorage.setItem('Comments',JSON.stringify(commentarr));
  },[commentarr]);
  

  console.log(commentarr);

return (
  <>
  Comment Section
  <div className=''> {commentarr.map((item)=>(<div className='comment-box'>{item} </div>))}</div>
  
      
       <div className='textArea'>
    <form onSubmit={handleSubmit}>
          <textarea className='comment-textarea'  type="text" onChange={(e)=>setComment(e.target.value)}/>
           <button className='post-button'
           type='submit'>
           comment
           </button>
    </form>

  </div>

     
  </>

)
}

export default Comment