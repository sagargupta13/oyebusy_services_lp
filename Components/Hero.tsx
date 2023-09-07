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
            <h1>Form goes here</h1>
          </div>
          <div className="rightContent">
            <h1>Book your professional electrician service.</h1>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCalendar} className="hero-icon" />
                <div>
                  <h3>1. GET APPOINTMENT</h3>
                  <h4>
                    Get a fast and accurate quote for your electrician needs
                    with just a few clicks.
                  </h4>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faLock} className="hero-icon" />
                <div>
                  <h3>2. CONFIRM BOOKING</h3>
                  <h4>
                    2. CONFIRM BOOKING Confirm your appointment and select a
                    suitable time for our skilled electricians to come to your
                    place.
                  </h4>
                </div>
              </li>
              <li>
                <FontAwesomeIcon icon={faHome} className="hero-icon" />
                <div>
                  <h3>3. WE’LL FIX IT</h3>
                  <h4>
                    Sit back and relax while our expert electricians take care
                    of your needs. Our skilled team will ensure that your
                    electrical systems are working flawlessly.
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-label">
        <p>Get the results you deserve with our top-notch service.</p>
      </div>
      <div className="hero-details">
        <h4>- About Plumber Services -</h4>
        <p>
          When it comes to plumbing issues, time is of the essence. Leaks,
          clogs, and other plumbing problems can cause significant damage to
          your home or business if not addressed quickly and properly. That’s
          where Oyebusy comes in. We offer professional plumbing services to our
          customers, ensuring that their plumbing issues are fixed quickly and
          efficiently
        </p>{" "}
        <br />
        <p>
          Our team of licensed and experienced plumbers can handle any plumbing
          problem, no matter how big or small. From simple repairs to complex
          installations, we have the expertise and equipment to get the job done
          right the first time.
        </p>
        <h2>Our services include but are not limited to:</h2>
        <ol>
          <li>Drain cleaning</li>
          <li>Leak detection and repair</li>
          <li>Toilet repair and installation</li>
          <li>Faucet repair and installation</li>
          <li>Water heater repair and installation</li>
          <li>Gas line repair and installation</li>
          <li>Pipe repair and installation</li>
        </ol>
        <h2>Why choose Oyebusy for your plumbing needs?</h2>
        <ol>
          <li>
            Our team of licensed plumbers has the expertise and experience to
            handle any plumbing issue.
          </li>
          <li>
            We understand that plumbing emergencies can happen at any time,
            which is why we offer 24/7 emergency services. We respond quickly to
            your calls and arrive at your location promptly.
          </li>
          <li>
            We offer competitive pricing for our plumbing services, and we
            always provide upfront pricing with no hidden fees.
          </li>
          <li>
            Take pride in the quality of our work and always strive to provide
            the best service possible.
          </li>
          <li>
            Our goal is to ensure that our customers are satisfied with our
            services. We work hard to exceed their expectations and provide
            excellent customer service.
          </li>
        </ol>
        <p style={{marginTop:'30px'}}>Don’t let plumbing issues cause you stress and inconvenience. Contact Oyebusy for all your plumbing needs. We’re here to help! <br/><br/>Connect with the professionals at Oyebusy for plumbing services which are available at the most affordable services. Our professionals are always there to help you get rid of all plumbing issues very easily and offer high quality services.</p>
      </div>
    </div>
  );
};

export default Hero;
