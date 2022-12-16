import React from 'react'
import "./Header.css"

function Header(props) {
  return (
    <div className='Header-home'>
        <h1 className='Main-header-home'>{props.title}</h1>
    </div>
  )
}

export default Header