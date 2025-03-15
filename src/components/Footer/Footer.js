import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs"; // Import Bootstrap Icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are an online shopping platform offering a wide range of products.
              Shop with us for the best deals and an amazing shopping experience.
            </p>
          </div>

          {/* Customer Service */}
          <div className="col-md-4">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text">Contact Us</a></li>
              <li><a href="#" className="text">Return Policy</a></li>
              <li><a href="#" className="text">Shipping Information</a></li>
              <li><a href="#" className="text">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li className="me-3">
                <a href="#" className="text" target="_blank" rel="noopener noreferrer">
                  <BsFacebook size={18} className="me-1"/> Facebook
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text" target="_blank" rel="noopener noreferrer">
                  <BsTwitter size={18} className="me-1"/> Twitter
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text" target="_blank" rel="noopener noreferrer">
                  <BsInstagram size={18} className="me-1"/> Instagram
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size={18} className="me-1"/> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 BrandName. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
