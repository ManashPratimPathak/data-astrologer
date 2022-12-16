import React from 'react'
import "./ImageSlider.css"

function ImageSlider() {
  return (
    <div className='cards'>
        <div className='outer'>
            <div className='card' style={{"--delay": "-2"}}>
               <h1>Hello</h1>
            </div>
            <div className='card' style={{"--delay": "-1"}}>
               <h1>Hello</h1>
            </div>
            <div className='card' style={{"--delay": "0"}}>
               <h1>Hello</h1>
            </div>
            <div className='card' style={{"--delay": "1"}}>
               <h1>Hello</h1>
            </div>
            <div className='card' style={{"--delay": "2"}}>
               <h1>Hello</h1>
            </div>
        </div>
    </div>
  )
}

export default ImageSlider