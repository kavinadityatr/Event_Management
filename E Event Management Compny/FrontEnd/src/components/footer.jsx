// import React from 'react';
import logo from '../assets/images/Logo1.jpg';
import '../assets/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="E Event Management Company Logo" />
          <h3>E Event Management</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Service">Services</a></li>
            
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>44A, E Plaza, CBE-08</p>
          <p>Email: e@eventmanagement.com</p>
          <p>Phone: +91 89765 43260</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E Event Management Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
