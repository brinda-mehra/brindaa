import React from 'react'

import Navbar from '../components/Navbar'
import HeroContact from '../components/HeroContact';
import Form from '../components/Form';
import Footer from '../components/Footer';


const Contact = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Navbar></Navbar>
      <HeroContact heading="Get In Touch!" text="You can contact me here!"></HeroContact>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Contact