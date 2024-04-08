import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="services-card">
      <img src={props.imageSrc} alt="services" className="card-image" />
      <h3 className="card-heading">{props.cardHeading}</h3>
    </div>
  );
};

export default ServicesCard;
