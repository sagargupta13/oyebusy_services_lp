import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../Styles/NavList.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavList = () => {
  return (
    <nav className="nav-list">
      <div className="nav-container">
        <div className="nav-list-left">
          <ul>
            <li>
              <a href="/">
                <span>APPLIANCE CARE <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </a>
            </li>
            <li>
              <a href="/">
               <span> HOME CARE
                <FontAwesomeIcon icon={faCaretDown} /></span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>HANDYMAN
                <FontAwesomeIcon icon={faCaretDown} /></span>
              </a>
            </li>
            <li>
             <span> <a href="/">BLOG</a></span>
            </li>
            <li>
              <span> <a href="/">CONTACT</a></span>
            </li>
          </ul>
        </div>

        <div className="nav-list-right">
        <a href="/"><span>HIRE PROFESSIONALS</span></a>
        </div>
      </div>
    </nav>
  );
};

export default NavList;
