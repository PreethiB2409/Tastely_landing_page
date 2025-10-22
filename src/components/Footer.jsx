import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">Tastely</span>
            </div>
            <p className="footer-tagline">Cook. Share. Inspire.</p>
          </div>
          <div className="footer-links">
            <a href="#recipes" className="footer-link">Recipes</a>
            <a href="#story" className="footer-link">About Us</a>
            <a href="#contact" className="footer-link">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Tastely.</p>
        </div>
      </div>
    </footer>
  );
}