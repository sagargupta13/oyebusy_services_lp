"use client";
import React from "react";
import "../Styles/Services.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import CustomCard from "./CustomcardRight";
import CustomCard2 from "./CustomcardLeft";
const Services = () => {
  const cardData1 = {
    imageSrc: "/plumber-repair-experienced-atten.jpg",
    title: "Leaky Basin / Sink Repair",
    items: ["Waste pipe leakage fix", "Tap leakage fix", "Get plumber today"],
    buttonText: "Learn More",
  };
  const cardData2 = {
    imageSrc: "/service-maintenance-worker-repai.jpg",
    title: "Need Drain Blockage Fix?",
    items: [
      "Sink overground / underground",
      "Bathroom, balcony drain clear",
      "Get blockage removal today",
    ],
    buttonText: "Learn More",
  };
  const cardData3 = {
    imageSrc: "/oyebusy-plumber-minor-fitting.jpg",
    title: "Get Bath Fitting Installation",
    items: [
      "Soap holder, towel hanger, corner set",
      "Tap, shower, Jet & mixer",
    ],
    buttonText: "Learn More",
  };
  const cardData4 = {
    imageSrc: "/man-adjusting-water-tap-with-wre.jpg",
    title: "Tap & Mixer Repair & Installation",
    items: ["Hot & cold mixer repair", "Tap repair / replacement"],
    buttonText: "Learn More",
  };
  const cardData5 = {
    imageSrc: "/oyebusy-toilet-pot-repair-instal.jpg",
    title: "Toilet Pot / Flush Repair & Installation",
    items: [
      "Flush button repair",
      "PVC, Ceramic, In-wall flush repair",
      "Floor / wall mounted pot repair",
      "Installation / Repalcement",

      "Get inspection today",
    ],
    buttonText: "Learn More",
  };
  return (
    <div className="service">
      <h4>- WHAT WE DO -</h4>
      <h2>Check out some of our professional services!</h2>

      <CustomCard {...cardData1} />
      <CustomCard2 {...cardData2} />
      <CustomCard {...cardData3} />
      <CustomCard2 {...cardData4} />
      <CustomCard {...cardData5} />
    </div>
  );
};

export default Services;
