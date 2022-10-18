import "./HeroImgAbStyles.css"

import React, { Component } from 'react'

class HeroImgAb extends Component {
    render(){
  return (
    <div className="heroimg2">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            <p className="txt2">{this.props.text2}</p>
            <p className="txt3">{this.props.text3}</p>

        </div>
    </div>
  )
}
}

export default HeroImgAb