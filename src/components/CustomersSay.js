import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'customer1.png',
    rating: 5,
    review: 'Amazing food and service!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'customer2.png',
    rating: 5,
    review: 'Best Mediterranean in Chicago.',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    image: 'customer3.png',
    rating: 4,
    review: 'Will definitely come back!',
  },
  {
    id: 4,
    name: 'Emily Davis',
    image: 'customer4.png',
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