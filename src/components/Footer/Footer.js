import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
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
              <li><a href="#" className="text-light">Contact Us</a></li>
              <li><a href="#" className="text-light">Return Policy</a></li>
              <li><a href="#" className="text-light">Shipping Information</a></li>
              <li><a href="#" className="text-light">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="me-3">
                <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
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
