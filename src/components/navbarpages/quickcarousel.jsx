import {React} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function Quickcarousel(props) {
  return (
    <>
     <Carousel  
        showThumbs={false}
        infiniteLoop
        stopOnHover={true}
        showStatus={false}
        className="quick-carousel">
      <div>
        <img src={props.imgsrc1} alt="offer" className="carousel-image"  />
       
      </div>
      <div>
        <img src={props.imgsrc2} alt="offer" className="carousel-image"  />
        
      </div>
      <div>
        <img src={props.imgsrc3} alt="offer" className="carousel-image" />
       
      </div>
    </Carousel>
    </>
  )
}
