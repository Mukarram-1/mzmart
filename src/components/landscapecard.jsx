import React from "react";

const LandscapeCard = ({ imageSrc, rightText }) => {
  return (
    <div className="landscape-card">
      <div className="landscapeclr">
        <div className="right-text">{rightText}</div>
      </div>
    </div>
  );
};

export default LandscapeCard;