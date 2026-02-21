import React from 'react';
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
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <div className="rating">
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p className="name">{testimonial.name}</p>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;