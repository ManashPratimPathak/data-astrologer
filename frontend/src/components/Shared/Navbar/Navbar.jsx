import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='Nav-items'>
            <ul className='Nav-links Nav-left'>
                <li><a>Home</a></li>
                <li><a>About us</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className='Nav-items'>
            <ul className='Nav-links Nav-right'>
                <li style={{paddingRight:"15px"}}><a type='email'>Contact@dataAstrologer.in</a></li>
                <div className='social-icons'>
                    <li><a><i class="fa-brands fa-2x fa-square-facebook"></i></a></li>
                    <li><a><i class="fa-brands fa-2x fa-instagram"></i></a></li> 
                    <li><a><i class="fa-brands fa-2x fa-linkedin"></i></a></li> 
                </div>          
            </ul>
        </div>
    </div>
  )
}

export default Navbar