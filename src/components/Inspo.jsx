import React from 'react';

export default function Inspo() {
  return (
    <section className="inspiration">
      <div className="inspiration-container">
        <div className="inspiration-image-wrapper">
          <img 
            src="/src/assets/inspo.png" 
            alt="Beautiful food spread"
            className="inspiration-image"
          />
        </div>
        <div className="inspiration-content">
          <h2 className="inspiration-title">HUNGRY FOR INSPIRATION?</h2>
          <p className="inspiration-description">
            Explore trending recipes hand-picked by the community.
          </p>
        </div>
      </div>
    </section>
  );
}