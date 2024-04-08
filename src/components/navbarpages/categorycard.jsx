import React from 'react'
import { Link } from 'react-router-dom';
export default function Categorycard(props) {
    return (
        <div className="category-card">
          <img src={props.imageSrc} alt="category" className="card-image" />
          <h3 className="card-heading">{props.heading}</h3>
          <Link><h3 className="card-heading">See More...</h3></Link>
        </div>
      );
}
