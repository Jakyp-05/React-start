import React from 'react'
import img from "../../assets/image/company.png"
import "./Header.css"

const  Header = (props) => {
  return (
    <header className='header'>
        <img src={img}/>
    </header>
   )
}

export default Header
