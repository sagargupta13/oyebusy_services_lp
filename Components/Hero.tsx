import Image from "next/image";
import React from "react";
import "../Styles/Hero.css";
import { faCalendar, faLock, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
  return (
    <div className="heroContainer">
      <div
        className="backgroundImage"
        style={{ backgroundImage: 'url("/oyebusy-home-hero-banner.jpg")' }}
      >
        <div className="innerContainer">
          <div className="leftContent">
            <h1>Your Left Content</h1>
            <p>Your left content description here.</p>
          </div>
          <div className="rightContent">
            <h1>Book your professional electrician service.</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
                <h3>1. GET APPOINTMENT</h3>
                <h3>Get a fast and accurate quote for your electrician needs with just a few clicks.</h3>
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHome} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
