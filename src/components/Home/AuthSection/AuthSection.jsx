import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AuthSection.css'
import ButtonsA from '../../Shared/Buttons/ButtonsA'


function AuthSection() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='AuthSection' data-aos="fade-left">
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