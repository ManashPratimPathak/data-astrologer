import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'
import Work from './Work/Work'
import Header from '../Home/Header/Header'
import Astrologers from './Astrologers.jsx/Astrologers'

function OurWork() {
  return (
    <>
        <Navbar />
        <Header  title="This is what we do."/>
        <Work />
        <Header  title="Meet our Astrologers."/>
        <Astrologers />
        <Header  title="Our tools."/>
        <Footer />
    </>
  )
}

export default OurWork