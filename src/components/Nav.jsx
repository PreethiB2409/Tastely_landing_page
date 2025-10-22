import React from 'react';

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <span className="nav-logo-text">Tastely</span>
      </div>
      <div className="nav-menu">
        <a href="#recipes" className="nav-link">Recipes</a>
        <a href="#story" className="nav-link">Our story</a>
        <a href="#reviews" className="nav-link">Reviews</a>
        <a className="get-started">Get Started</a>
      </div>
    </nav>
  );
}