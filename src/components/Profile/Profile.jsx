import React from 'react'
import "./Profile.css"
import MyPost from './MyPost/MyPost'

const Profile = () => {
  return (
    <div className='content'>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
      </div>
      <div> ava + description</div>
      <MyPost />
    </div>
  )
}

export default Profile
