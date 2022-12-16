import React from 'react'
import "./ImageSlider.css"
import p1 from "../../../assests/images/C-1.png"
import p2 from "../../../assests/images/C-2.png"

function ImageSlider() {
  return (
    <div className='cards'>
        <div className='outer'>
            <div className='card' style={{"--delay": "-2"}}>
               <div className='img'>
               <img src={p1} alt="pic-1"/>
               </div>
            </div>
            <div className='card' style={{"--delay": "-1"}}>
            <div className='img'>
               <img src={p2} alt="pic-1"/>
               </div>
            </div>
            <div className='card' style={{"--delay": "0"}}>
            <div className='img'>
               <img src={p1} alt="pic-1"/>
               </div>
            </div>
            <div className='card' style={{"--delay": "1"}}>
            <div className='img'>
               <img src={p2} alt="pic-1"/>
               </div>
            </div>
            <div className='card' style={{"--delay": "2"}}>
            <div className='img'>
               <img src={p1} alt="pic-1"/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider