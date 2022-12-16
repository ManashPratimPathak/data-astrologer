import React from 'react'
import './AuthSection.css'
import ButtonsA from '../../Shared/Buttons/ButtonsA'


function AuthSection() {
  return (
    <div className='AuthSection'>
    <ButtonsA
        buttonName="Lets Start!"
    />
    <ButtonsA
        buttonName="Sign in / Log in"
    />
    </div>
  )
}

export default AuthSection