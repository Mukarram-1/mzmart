import React, { useEffect } from "react";
import Navbar from "../navbar";
import ServicesCard from "../servicescard";
import Footer from "../footer";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DiscountIcon from '@mui/icons-material/Discount';
import RecommendIcon from '@mui/icons-material/Recommend';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LandscapeCard from "../landscapecard";
const landscapeText =
  "Our own delivery service\n\n DEX MZ has built DEX, the first logistics company specifically designed for ecommerce operations in Its countries In Pakistan, DEX already has 1,000 riders in 30 cities for faster and better delivery service";

export default function About() {
  useEffect(() => {
    document.title = "About | MZ";
  }, []);
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div className="background-image"></div>
        <div className="overlay">
          <div className="text">
            <h2>About Us</h2>
            <p>MZ is a Mall, A Marketplace, And A Community!</p>
          </div>
        </div>
      </div>
      <div className="about-sec">
        <div className="leftpic-container">
          <div className="leftpic">
            <img src="/images/aboutleftside.jpg" alt="leftpic" />
          </div>
        </div>
        <div className="aboutpara ">
          <div className="abouthead">
            <h2>Our Story</h2>
          </div>
          <p>
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
        </div>
      </div>
      {/* ourservices */}
      <div className="services-portion">
        <h2
          style={{ textAlign: "center", marginBottom: "40px", fontSize: "8vh" }}
        >
          OUR SERVICES
        </h2>
        <div className="services">
          <ServicesCard
            imageSrc="./images/customer-service.png"
            cardHeading="Support Center"
          />
          <ServicesCard
            imageSrc="./images/24-hours.png"
            cardHeading="Assured Assistance"
          />
          <ServicesCard
            imageSrc="./images/best-price.png"
            cardHeading="Competitive Pricing"
          />
          <ServicesCard
            imageSrc="./images/express-delivery.png"
            cardHeading="Express Delivery"
          />
          <ServicesCard
            imageSrc="./images/shield.png"
            cardHeading="Protected Shopping"
          />
        </div>
      </div>
      {/* achievements */}
      <div className="achievements">
        <h2
          style={{ textAlign: "center", marginBottom: "40px", fontSize: "8vh" }}
        >
          OUR ACHIVEMENTS
        </h2>
        <div className="achievement-pics" style={{ marginBottom: "40px" }}>
          <ServicesCard
            imageSrc="./images/graph.png"
            cardHeading="100%+ Annual Growth"
          />
          <ServicesCard
            imageSrc="./images/man.png"
            cardHeading="25 Million MZ Users"
          />
          <ServicesCard
            imageSrc="./images/suitcase.png"
            cardHeading="1 Million Jobs"
          />
          <ServicesCard
            imageSrc="./images/seller.png"
            cardHeading="200 000 Active MZ Sellers"
          />
          <ServicesCard
            imageSrc="./images/transaction.png"
            cardHeading="Digital Payments"
          />
        </div>
      </div>
      {/* CORE FEATURES */}
      <div className="core-features">
        <h2 className="core-feature-heading">Core Features</h2>
        <p className="core-feature-phrase">
          "Discover a World of Shopping Delights with Our Unbeatable Prices and
          Exclusive Discounts, Where Every Purchase is a Celebration of
          Savings!"
        </p>
        <ul
          style={{ listStyle: "none", textDecoration: "none" }}
          className="core-features-list"
        >
          <div className="left-features">
          <li>
          <div className="f-icon"><PriceCheckIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading">Unbeatable Prices</h3>
            <p>
              Shop smart with our competitive pricing, ensuring you always get
              the best deals.
            </p>
          </li>

          <li>
          <div className="f-icon"><DiscountIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading">Exclusive Discounts</h3>
            <p>
              Unlock exclusive savings and limited-time offers for a rewarding
              shopping experience.
            </p>
          </li>
          <li>
           <div className="f-icon"><RecommendIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading">Personalized Recommendations</h3>
            <p>
              Tailored just for you - discover products you'll love,
              effortlessly.
            </p>
          </li>
          <li>
          <div className="f-icon"><ShieldIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading">Secure Shopping</h3>
            <p>
              Your peace of mind is our priority with robust security measures.
            </p>
          </li>
          </div>
          <div className="right-features">
          
          <li>
          <div className="f-icon"><LocalShippingRoundedIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading"> Rapid Delivery</h3>
            <p>
              From cart to doorstep, enjoy swift and reliable delivery services.
            </p>
          </li>
          <li>
          <div className="f-icon"><ThumbUpAltIcon sx={{ fontSize: 40 }}/></div>

            <h3 className="c-feature-heading">Quality Assurance</h3>
            <p>
              Crafted with precision, our products are delivered with care and
              guaranteed quality
            </p>
          </li>
          <li>
          <div className="f-icon"><SupportAgentIcon sx={{ fontSize: 40 }}/></div>
            <h3 className="c-feature-heading"> 24/7 Customer Support</h3>
            <p>
              Expert help is just a message away, available around the clock.
            </p>
          </li>
          <li>
          <div className="f-icon"><RecyclingIcon sx={{ fontSize: 40 }}/></div>

            <h3 className="c-feature-heading">Sustainability</h3>
            <p>
              Contribute to a greener world with our eco-friendly product
              options and practices.
            </p>
          </li>
          </div>
          
        </ul>
      </div>
      <div className="f-icon"><LandscapeCard imageSrc="./images/bg.jpg" rightText={landscapeText} /></div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
