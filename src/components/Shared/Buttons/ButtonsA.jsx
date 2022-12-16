import React from 'react'
import "./Buttons.css"

function ButtonsA(props) {
  return (
    <button className='buttonA'><a>{props.buttonName}</a></button>
  )
}

export default ButtonsA