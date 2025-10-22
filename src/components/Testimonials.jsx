import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 2500); 

      return () => clearInterval(interval);
    }, []);

  return (
    <section id="reviews" className="testimonials">
      <h2 className="testimonials-title">Voices from the Kitchen</h2>
      <div className="testimonial-card">
        <div className="testimonial-header">
          <img 
            src={testimonials[currentTestimonial].avatar} 
            alt={testimonials[currentTestimonial].name}
            className="testimonial-avatar"
          />
          <div className="testimonial-info">
            <h3 className="testimonial-name">{testimonials[currentTestimonial].name}</h3>
            <p className="testimonial-location">{testimonials[currentTestimonial].location}</p>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="star-icon" />
              ))}
            </div>
          </div>
        </div>
        <p className="testimonial-text">
          "{testimonials[currentTestimonial].text}"
        </p>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`testimonial-dot ${
                index === currentTestimonial ? 'testimonial-dot-active' : 'testimonial-dot-inactive'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}