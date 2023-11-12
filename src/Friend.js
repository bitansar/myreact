import React from 'react'

export default function Friend(props) {

    let messageref = React.createRef()
    let friendref = React.createRef()

    function message(){
        messageref.current.style.background = "green"
        messageref.current.style.color = "white"
      }
    function deleteFriend(){
        friendref.current.remove()  
    }


    return (
        <div className='friend' ref={friendref}>
            <h1> {props.name} </h1>
            <h2> {props.age} </h2>
            <button type='button' ref={messageref} onClick={message} className='messagebutton'>message</button>
            <button type='button' onClick={deleteFriend} className='del'>Delete</button>
        </div>
    )
}
