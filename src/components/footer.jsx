import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const date = new Date();
const year = date.getFullYear();
export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footer">
          <div className="footer-colms">
            <ul>
              <h3 className="footer-heading">Customer Care</h3>
              <Link>
                <li>Support Center</li>
              </Link>
              <Link>
                <li>Assured Assistance</li>
              </Link>
              <Link>
                <li>Competitive Pricing </li>
              </Link>
              <Link>
                <li>Express Delivery</li>
              </Link>
              <Link>
                <li>Protected Shopping</li>
              </Link>
            </ul>
          </div>

          <div className="footer-colms">
            <ul>
              <h3 className="footer-heading">Links</h3>
              <Link to="/home">
                <li>Home</li>
              </Link>

              <Link to="/shop">
                <li>Shop</li>
              </Link>

              <Link to="/about">
                <li>About Us</li>
              </Link>

              <Link to="/blogs">
                <li>Blogs</li>
              </Link>

              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className="footer-colms">
            <ul>
              <h3 className="footer-heading">Categories</h3>
              <Link>
                <li>Men</li>
              </Link>
              <Link>
                <li>Women</li>
              </Link>
              <Link>
                <li>Kids</li>
              </Link>
              <Link>
                <li>Appliances</li>
              </Link>
              <Link>
                <li>Phones</li>
              </Link>
              <Link>
                <li>Decors</li>
              </Link>
            </ul>
          </div>

          <div className="footer-right">
            <div className="footer-colms">
              <ul>
                <h3 className="footer-heading">Follow Us</h3>
                <div className="icons" style={{ display: "flex", gap: "10px" }}>
                  <Link>
                    <li>
                      <FacebookIcon sx={{ fontSize: 40 }} />
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <InstagramIcon sx={{ fontSize: 40 }} />
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <TwitterIcon sx={{ fontSize: 40 }} />
                    </li>
                  </Link>
                  <Link>
                    <li>
                      <LinkedInIcon sx={{ fontSize: 40 }} />
                    </li>
                  </Link>
                </div>
              </ul>
            </div>

            <div className="footer-colms">
              <ul>
                <h3 className="footer-heading">Newsletter</h3>
                <div className="input-subs">
                  <input
                    className="subs-input-field"
                    type="email"
                    placeholder="Enter Your Email To Subscribe!"
                  />
                  {/* <button className="subs-btn">Subscribe</button> */}
                  <button class="subs-btn">
                    Subscribe
                    <svg
                      fill="white"
                      viewBox="0 0 448 512"
                      height="1em"
                      class="arrow"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <hr style={{ width: "85%", margin: "30px 0" }} />
        <p>
          Copyright &copy; {year} All rights reserved | Made with
          <span style={{ color: "rgb(149, 7, 65,0.82)" }}> ❤ </span> by the MZ!
        </p>
      </div>
    </>
  );
}