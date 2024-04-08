import {React} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Carousel2() {
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop stopOnHover={true} showStatus={false}>
      <div>
        <img src="./images/bg.jpg" alt="offer" />
       <Link><p className="legend">Toys</p></Link>
      </div>
      <div>
        <img src="./images/bg.jpg" alt="offer" />
        <Link><p className="legend">Garments</p></Link>
      </div>
      <div>
        <img src="./images/bg.jpg" alt="offer" />
        <Link><p className="legend">Electronics</p></Link>
      </div>
    </Carousel>
  );
}
