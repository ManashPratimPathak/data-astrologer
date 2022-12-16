import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-items'>
                <p>(C) Copyright DataAstrologers 2022. All rights reserved</p>
        </div>
        <div className='Footer-items'>
            <ul className='Footer-links Footer-right'>
                <div className='social-icons' style={{alignItems: "center"}}>
                    <li><a>Privacy policy</a></li>
                    <li><a>Terms and conditions</a></li> 
                    <li><a><i class="fa-brands fa-2x fa-instagram"></i></a></li> 
                    <li><a><i class="fa-brands fa-2x fa-linkedin"></i></a></li> 
                </div>          
            </ul>
        </div>
    </div>
  )
}

export default Footer