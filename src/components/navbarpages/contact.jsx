import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

import Navbar from "../navbar";
import Footer from "../footer";
import HelpQuestion from "../helpquestion";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | MZ";
  }, []);
  return (
    <>
      <Navbar />
      <h2 className="h2-contact">Hi, How Can We Help You?</h2>
      <div className="help">
      
        <Link>
          <div className="help-options">
            <HelpQuestion className="help-card"
              icon={LocalShippingRoundedIcon}
              title="I WANT TO KNOW WHERE MY ORDER IS"
              text="Get notified to know when
               your order is ready."
            />
          </div>
        </Link>
        <Link>
          <div className="help-options">
            <HelpQuestion className="help-card"
              icon={LocalShippingRoundedIcon}
              title="I WANT TO RETURN AN ITEM"
              text="Use our online return form to return an item."
            />
          </div>
        </Link>
        <Link>
          <div className="help-options">
            <HelpQuestion className="help-card"
              icon={LocalShippingRoundedIcon}
              title="I WANT TO CANCEL AN ORDER"
              text="Use our online return form to cancel your order."
            />
          </div>
        </Link>
        <Link>
        <div  className="help-options">
          <div className="help-card">
            
      <h3>I have another question</h3>


      <p>Support Center</p>
      </div>
      </div>
      </Link>
  
      </div>
   

      <Footer />
    </>
  );
}
