import React, { useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Itemcard from "../itemcard";

export default function Home() {
  useEffect(() => {
    document.title = "MZ Online Shopping!";
  }, []);
  return (
    <>
      <Navbar />
      <div className="laptop-predictor">
      <h2 className="heading">
        Laptop Price Predictor Model
      </h2>
      <div className="image-container">
        <img src="./images/laptop.jpg" alt="Laptop" className="laptop-image" />
        <span className="new-tag">New</span>
        <button className="predict-button">Predict Price</button>
      </div>
    </div>
      <h2 className="section-heading">Popular Items</h2>
      <div className="itemcards">
        <Itemcard
          imgSource="./images/s1.png"
          hoverImgSource="./images/s2.png"
          itemname="Nike Air"
          itemprice="Rs.50,000"
        />
        <Itemcard
          imgSource="./images/s2.png"
          hoverImgSource="./images/s1.png"
          itemname="Nike Jordans"
          itemprice="Rs.40,000"
        />
        <Itemcard
          imgSource="./images/s1.png"
          hoverImgSource="./images/s2.png"
          itemname="Nike Air Jordans"
          itemprice="Rs.100,000"
        />
      </div>
      <Footer />
    </>
  );
}
