import "./HeroImgGalStyle.css"

import React, { Component } from 'react'

class HeroImgGal extends Component{
    render(){
        return (
            <div className="hero-imggal">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
        
            </div>
          )

    }
  
}

export default HeroImgGal