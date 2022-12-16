import React from 'react'
import "./Buttons.css"


function ButtonsA(props) {
  return (
    <button className='buttonA'><a>{props.buttonName} <span class="material-symbols-outlined">arrow_circle_right</span></a></button>
  )
}

export default ButtonsA