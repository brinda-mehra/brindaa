import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import HeroImgAb from '../components/HeroImgAb';
import FaqCard from '../components/FaqCard'

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbar></Navbar>
      <HeroImgAb heading="About Me" text="Hi! I'm Brinda, an aspiring UX researcher and product manager. I'm currently a Master's Student at the Unversity of Michigan's School of Information, where I specialize in Human Computer Interaction and Data Science." text2="While I did my undergrad in Psychology with a focus on neuro and cognitive science, I've always been focused on gaining interdisciplinary skills and knowledge that will allow me to leverage principles of human behaviour to design and deploy studies that can lay the groundwork for more intuitive, human-friendly devices and systems." text3="When I'm not crying over code, I enjoy reading old science fiction novels while running through my stash of tea at an alarming pace."></HeroImgAb>
      <FaqCard></FaqCard>
      <Footer></Footer>
    </div>
  )
}

export default About