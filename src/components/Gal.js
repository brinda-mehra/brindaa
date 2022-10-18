import "./GalCardStyles.css"
import GalCard from "./GalCard"
import GalCardData from "./GalCardData"

import React from 'react'


const Gal = () => {
  return (
    <div className="gal-container">
        <h1 className="gal-heading">Project Gallery</h1>
        <div className="galproj-container">
            {GalCardData.map((val, ind) => {
                return(
                    <GalCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} paper={val.paper}></GalCard>
                )
            })}
        </div>
    </div>
  )
}

export default Gal