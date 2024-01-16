import React from 'react'
import "./Post.css"

const Post = (props) => {
  // debugger;-- текшерет propsтун эмне бар, эгер ичинде маалымат болсо бар деп текшерет, жок болсо жок дейт пустой коргозот.
  return (
    <div className='item'>
      <img src='https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.jpg'/>
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  )
}

export default Post
