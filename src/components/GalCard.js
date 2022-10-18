import "./GalCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const GalCard = (props) => {
  return (
    <div className="galproj-card">
    <img src={props.imgsrc} alt="boxer"></img>
    <h2 className="gal-title">{props.title}</h2>
    <div className="gal-details">
        <p>{props.text}</p>
        <div className="gal-btns">
            <NavLink to={props.view} className="btn">View Project</NavLink>
            <NavLink to={props.paper} className="btn">Read Article</NavLink>



        </div>
    </div>
</div>
  )
}

export default GalCard