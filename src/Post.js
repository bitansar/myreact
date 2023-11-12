import React, { useEffect, useState } from 'react'

export default function Post(props) {

   let likeref = React.createRef()
   let dislikeref = React.createRef()
   let postref = React.createRef()
   let [likes, setLikes] = useState(0)
   let [dislikes, setDislikes] = useState(0)
   let [count, setCount] = useState(1)

  function like(){
    likeref.current.style.background = "red"
    likeref.current.style.color = "white"
    setLikes(likes+1)
  }
  function dislike(){
    dislikeref.current.style.background = "gray"
    dislikeref.current.style.color = "white"
    setDislikes(dislikes+1)
  }
  function deletepost(){
    postref.current.remove()
    props.decreasePost()
  }

  useEffect(() =>{
    setTimeout(() =>{
      setCount(count+1)
    }, 1000)
  })
  


  return (
    <div class="post" ref={postref}>
      <img src = {props.url} alt = "" width={400}/>
      <h2> {props.title} </h2>
      <p>  {props.text} </p>
      <h5>likes: {likes}</h5>
      <h5>{count}</h5>  
      <h5>dislikes: {dislikes}</h5>
      <button type='button' onClick = {like}  ref={likeref} className='likebutton'>Like</button>
      <button type='button' onClick={dislike} ref = {dislikeref} className='dislikebutton'>Dislike</button>
      <button type='button' onClick={deletepost} className='del'>delete</button>
    </div>
  )
}
