import React, { useState } from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {

    let title_ref = React.createRef()
    let text_ref = React.createRef()
    let url_ref = React.createRef()
    let [title, setTitle] = useState("")
    let [text, setText] = useState("")
    let [url, setUrl] = useState("")
    let [postsData, setPostsData] = useState(props.data.posts)
    let [count, setCount] = useState(props.data.posts.length)
    function createPost(){
        let newPost = {
            id:Date.now(),title,text,url
        }
        setPostsData([...postsData,newPost])
        setTitle("")
        setText("")
        setUrl("")
        setCount(count+1)
    }
    function decreasePost(){
        setCount(count-1)
    }

    return (
        <main>
            <div className='form'>
                <label for="title">Title:</label>
                <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="title" ref={title_ref} />
                <br/>
                <br/>
                <label for="text">Text:</label>
                <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder="text" ref={text_ref} />
                <br/>
                <br/>
                <label for="url">U  rl:</label>
                <input value={url} onChange={e => setUrl(e.target.value)} type="text" placeholder="url" ref={url_ref} />
                <br/>
                <br/>
                <button type='button' onClick={createPost}>Create</button>
            </div>
            <h3 align="center">Posts:{count}</h3>
            <Posts posts={postsData} decreasePost={decreasePost}></Posts>

        </main>
    )
}
