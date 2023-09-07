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
              <li >
                <FontAwesomeIcon icon={faCalendar} className="hero-icon"/>
                <div><h3>1. GET APPOINTMENT</h3>
                <h4>Get a fast and accurate quote for your electrician needs with just a few clicks.</h4></div>
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} className="hero-icon"/>
                <div><h3>2. CONFIRM BOOKING</h3>
                <h4>
2. CONFIRM BOOKING
Confirm your appointment and select a suitable time for our skilled electricians to come to your place.</h4></div>
              </li>
              <li>
                <FontAwesomeIcon icon={faHome} className="hero-icon"/>
                <div><h3>3. WE’LL FIX IT</h3>
                <h4>Sit back and relax while our expert electricians take care of your needs. Our skilled team will ensure that your electrical systems are working flawlessly.</h4></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
