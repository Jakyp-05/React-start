import React from 'react'
import "./MyPost.css"
import Post from './Post/Post'

const MyPost = () => {
  return (
    <div className='content'>
        <div>
          My posts
        </div>
        <div>
          New post
        </div>
        <textarea></textarea>
        <button>Add post</button>
        <div className='posts'>
          <Post message="Hi, how are you?" />
          <Post message="It's my first post"/>
        </div>
    </div>
  )
}

export default MyPost
