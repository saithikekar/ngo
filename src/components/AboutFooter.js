import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SocialMediaLinks />
            <p>Copyright © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
