import React from 'react'

import Navbar from '../components/Navbar'
import HeroImg3 from '../components/HeroImg3';
import Footer from '../components/Footer';
import Work from '../components/Work';


const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg3 heading="Featured Projects" text="Some of my most interesting, fully-fleshed out pieces of research"></HeroImg3>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}

export default Projects