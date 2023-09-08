"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <Image
        src="/arrow-right.png"
        alt="Arrow Icon"
        width={16}
        height={16}
        style={{ marginRight: "8px" }}
      />

      <span style={{ fontSize: "18px", fontWeight: "lighter" }}>{title}</span>
    </button>
  );
};

export default CustomButton;
