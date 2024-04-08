import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Quickcarousel from './navbarpages/quickcarousel';





const ItemPopup = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="itemheading">
          <h2 style={{marginBottom:'30px'}}>{item.itemname}</h2>
        </div>
        {/* <div className="itempic">
          <img src={item.imgSource} alt="" />
        </div> */}
         <Quickcarousel imgsrc1='./images/s1.png'  imgsrc2='./images/s2.png' imgsrc3='./images/s1.png' />
        <div className="itemdetails">
          <p>{item.itemdescription}</p>
          <p>Price: {item.itemprice}</p>
        </div>
        <div className="itemfeatures">
          <ul>
            <li>Top Notch Quality</li>
            <li>Best Seller</li>
            <li>Low Prices</li>
          </ul>
        </div>
        <div className="popupbuttons">
      <button className="minusplus" onClick={handleDecrease}>-</button>
      <p className='quantity'>{quantity}</p>
      <button className="minusplus" onClick={handleIncrease}>+</button>
      <Link><button className='quickcart'>Add to Cart</button></Link>
    </div>
      </div>
    </div>
  );
};

export default ItemPopup;