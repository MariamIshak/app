import React, { useRef, useEffect } from 'react';

import image1 from '../assets/customer1.png';
import image2 from '../assets/customer2.png';
import image3 from '../assets/customer3.png';
import image4 from '../assets/customer4.png';
const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: image1,
    rating: 5,
    review: 'Amazing food and service!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: image2,
    rating: 5,
    review: 'Best Mediterranean in Chicago.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: image3,
    rating: 4,
    review: 'Will definitely come back!',
  },
  {
    id: 4,
    name: 'Emily Davis',
    image: image4,
    rating: 5,
    review: 'Authentic and delicious.',
  },
  {
    id: 5,
    name: 'Michael Brown',
    image: image1,
    rating: 3,
    review: ' delicious.',
  },
];

function CustomersSay() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Horizontal scroll with mouse wheel
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.testimonial-card').offsetWidth;
      const gap = 24; // gap value from CSS
      container.scrollBy({
        left: direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        
        <div className="testimonials-navigation">
          <button 
            className="scroll-button scroll-left" 
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <span className="scroll-arrow">‹</span>
          </button>
          
          <div 
            className="testimonials-scroll-container" 
            ref={scrollContainerRef}
          >
            <div className="testimonials-track">
              {testimonialsData.map((testimonial, index) => (
                <article 
                  key={testimonial.id} 
                  className="testimonial-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="testimonial-header">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <div className="testimonial-rating">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-body">
                    <p className="testimonial-text">{testimonial.review}</p>
                  </div>
                  <div className="testimonial-decoration">
                    <span className="quote-icon">"</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <button 
            className="scroll-button scroll-right" 
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <span className="scroll-arrow">›</span>
          </button>
        </div>
        
        {/* Scroll indicators */}
        <div className="scroll-indicators">
          {testimonialsData.map((_, index) => (
            <span 
              key={index} 
              className="indicator"
              data-index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;