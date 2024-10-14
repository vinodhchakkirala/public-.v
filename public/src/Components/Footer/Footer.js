import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="hospital-footer">
      <div className="footer-section hospital-info">
        <h3>Hospital</h3>
        <p>We provide top-notch healthcare services to ensure your well-being. Trusted by 9000+ patients.</p>
      </div>
      <div className="footer-section hospital-address">
        <h3>Address Info</h3>
        <p>123 Main Street, City</p>
        <p>+91-1234567890</p>
        <p>info@hospital.com</p>
      </div>
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#appointment">Appointment Booking</a></li>
          <li><a href="#emergency">Emergency Services</a></li>
          <li><a href="#support">Support Helpline</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-section subscribe-updates">
        <h3>Subscribe to Updates</h3>
        <input type="email" placeholder="Enter Email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
