import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemPopup from "./itempopup";

const Itemcard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
<div
      className={'itemscard ${isHovered ? "hovered" : ""}'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
>
      <img src={isHovered ? props.hoverImgSource : props.imgSource} alt="" />
      <div className="itemdetails">
        <Link to="/" className="itemname">
          {props.itemname}
        </Link>
        <p className="itempricetag">{props.itemprice}</p>
        {isHovered && (
          <button className="quickViewButton" onClick={openPopup}>
            Quick View
          </button>
        )}
      </div>
      {isPopupOpen && <ItemPopup item={props} onClose={closePopup} />}
    </div>
  );
};

export default Itemcard;