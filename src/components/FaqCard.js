import "./FaqCardStyle.css"

import React from 'react'
import { GiBee } from "react-icons/gi"

const faqcard = () => {
  return (
    <div className="information">
        <div className="card-container">
            <div className="card">
                <h2><GiBee size={27} style={{ color: "#FDFD96", marginRight: "1.rem", marginLeft:"0.8rem"}}/> Bee Fact #1</h2>
                <span className="bar"></span>
                <p className="btc"> Why is half your website in Notion?</p>
                <p className="d"> The React tutorial I binge watched to create this website didn't cover all the components that I wanted to put in my Case Study pages. I'm working on it, I promise!</p>
            </div>

            <div className="card">
                <h2><GiBee size={27} style={{ color: "#FDFD96", marginRight: "1.rem", marginLeft:"0.8rem"}}/> Bee Fact #2</h2>
                <span className="bar"></span>
                <p className="btc"> What made you switch from Psychology to HCI?</p>
                <p className="d"> For a long time, my goal was to become a neuroscientist. Somewhere along the way, I tripped over a couple of articles that talked about how the human brain perceived and responded to media, particularly media technologies and was immediately sucked down that rabbit hole. One thing led to another and I decided that I was more interested in seeing how humans responded to robots than in rats learning to respond to pleasurable stimuli - so here I am! </p>
            </div>


            <div className="card">
                <h2><GiBee size={27} style={{ color: "#FDFD96", marginRight: "1.rem", marginLeft:"0.8rem"}}/> Bee Fact #3</h2>
                <span className="bar"></span>
                <p className="btc"> What do you want to do with your degree</p>
                <p className="d">Not to be trite, but as the UMSI motto declares: Information Changes Everything. I hope to take my degree into all sorts of industries, not just Big Tech or Big Consulting to help revolutionze the way people treat information. Some of my current interests are sustainability, assistive technologies and policy.</p>
            </div>

        </div>
    </div>
  )
}

export default faqcard