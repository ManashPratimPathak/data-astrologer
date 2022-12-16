import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Header from './Header/Header'
import AuthSection from './AuthSection/AuthSection'
import ImageSlider from './ImageSlider/ImageSlider'
import Timeline from './Timeline/Timeline'

function Home() {
  return (
    <> 
    <Navbar/>
    <Header title="Your data is your future"/>
    <ImageSlider/>
    <AuthSection/>
    <div data-aos="fade-right" data-aos-duration="1500">
      <Header title="Listen what your Data is trying to say"/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500">
      <ImageSlider/>
    </div>
    <div data-aos="fade-up" data-aos-duration="1500">
      <Header title="How to get started ?"/>
    </div>
    </>
  )
}

export default Home