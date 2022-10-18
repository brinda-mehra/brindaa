import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/backgroundhero.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="background hero"/>
      </div>
      <div className="content">
        <h1> Hi! I'm Brinda</h1>
        <h2>UX Researcher by Day // Couch Potato by Night </h2>
        <div>
          <Link to={"/projects"} className="btn">Projects</Link>
          <Link to={"/about"} className="btn-light">About</Link>
        </div>

      </div>
    </div>
  )
}

export default HeroImg