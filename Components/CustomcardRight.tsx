
import React from 'react';
import "../Styles/CustomcardRight.css";
import CustomButton from "./CustomButton";
interface CustomCardProps {
  imageSrc: string;
  title: string;
  items: string[];
  buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ imageSrc, title, items }) => {
    const handleScroll = () => {};
  return (
    <div className="custom-card">
      
      <div className="custom-card-content">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <CustomButton
        title="Book Now"
        containerStyles="button-styles"
        handleClick={handleScroll}
       />
      </div>
      <div className="custom-card-image">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default CustomCard;
