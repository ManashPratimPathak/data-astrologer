import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Header from './Header/Header'
import AuthSection from './AuthSection/AuthSection'
import ImageSlider from './ImageSlider/ImageSlider'

function Home() {
  return (
    <> 
    <Navbar/>
    <Header title="Your data is your future"/>
    <ImageSlider/>
    <AuthSection/>
    <Header title="Listen what your Data is trying to say"/>
    <ImageSlider/>
    <Header title="How to get started"/>
    </>
  )
}

export default Home