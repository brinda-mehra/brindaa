import "./Footerstyles.css";

import React from 'react';

import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff" , marginRight:"2rem"}} />
                    <div>
                        <p>University of Michigan</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: "#fff" , marginRight:"2rem"}} />
                    <div>
                        <p>+1 (347) 907-6084</p>
                    </div>
                </div>
                <div className="mail">
                    <FaMailBulk size={20} style={{color: "#fff" , marginRight:"2rem"}} />
                    <div>
                        <p>brinda@umich.edu</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h4>Brinda Mehra</h4>
                <p>UMSI MSc in Information 2024</p>
                <div className="social">
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer