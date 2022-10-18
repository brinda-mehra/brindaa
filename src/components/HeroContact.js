import "./HeroContactStyle.css"

import React, { Component } from 'react'

class HeroContact extends Component {
  render() {
    return (
      <div className="con-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroContact