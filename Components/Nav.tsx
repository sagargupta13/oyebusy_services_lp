import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../Styles/Nav.css";
// import styles from '../Styles/Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid ">
        <Link href={"/"}>
          <Image
            src="/Oyebusy-logo.jpg"
            alt="Company logo"
            width={100}
            height={50}
          />
        </Link>

        <div className="nav-items">
          <ul className="social-icons">
            <li>
              <a href="tel:+123456789">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon-style"
                  style={{
                    marginRight: "10px",

                    // backgroundColor: "#5081F5 10%",
                    borderRadius: "50%",
                  }}
                />
              </a>
              <span style={{ color: "black" }}>9990001089</span>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="icon-style" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="icon-style" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="icon-style" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faPinterest} className="icon-style" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faLinkedin} className="icon-style" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faYoutube} className="icon-style" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Nav;
