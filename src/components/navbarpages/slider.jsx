// CategorySlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CategoryCard from './categorycard'; // Assuming you have a CategoryCard component
// import './CategorySlider.css'; // Add your own styles if needed

const CategorySlider = () => {
  const categories = [
    { id: 1, imageSrc: './images/shield.png', heading: 'Garments' },
    { id: 2, imageSrc: './images/suitcase.png', heading: 'Suitcases' },
    { id: 3, imageSrc: './images/transaction.png', heading: 'Transactions' },
    { id: 4, imageSrc: './images/transaction.png', heading: 'Electronics' },
    // Add more categories as needed
  ];
  const sliderStyle = {
    width: '50%', // Set the width of the entire slider to half of the original
    margin: 'auto', // Center the slider within its container
  };

  const listStyle = {
    margin: '0', // Remove margin on the slick list
    border: 'none', // Remove any remaining borders
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} style={sliderStyle}>
      {categories.map((category) => (
        <div key={category.id} style={listStyle} className="category-card">
          <CategoryCard imageSrc={category.imageSrc} heading={category.heading} />
        </div>
      ))}
    </Slider>
  );
};

export default CategorySlider;
