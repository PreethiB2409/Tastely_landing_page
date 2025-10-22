import React, {useState, useEffect} from 'react';

export default function Hero() {
  const images =["/src/assets/plate1.png", "/src/assets/plate2.png", "/src/assets/plate3.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
      }, 800); // 0.8 seconds

      return () => clearInterval(interval); // cleanup
    }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Cook. Share. Inspire.</h1>
          <p className="hero-description">
            Join a community of home chefs sharing recipes, tips and creativity
          </p>
          <button className="hero-button">Get started</button>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src={images[currentImage]} 
              alt="Delicious meal platter"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}