import React from 'react'
import Navbar from '../components/Navbar'
import HeroImgGal from '../components/HeroImgGal'
import Gal from '../components/Gal'
import Footer from '../components/Footer'

const Gallery = () => {
  window.scrollTo(0, 0)
  return (
    <div>
        <Navbar></Navbar>
        <HeroImgGal heading="Gallery" text="A broad overview of some of my other projects in the past few years"></HeroImgGal>
        <Gal></Gal>
        <Footer></Footer>
    </div>
  )
}

export default Gallery