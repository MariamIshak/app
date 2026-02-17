import React from 'react';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <img src="hero-image.png" alt="Little Lemon Restaurant" />
      </section>
      <section className="specials">
        <div className="specials-header">
          <h2>This week's specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="cards">
          <div className="card">
            <img src="greek-salad.png" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p className="price">$12.99</p>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="#order">Order a delivery</a>
          </div>
          <div className="card">
            <img src="bruschetta.png" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="#order">Order a delivery</a>
          </div>
          <div className="card">
            <img src="lemon-dessert.png" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p className="price">$5.00</p>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="#order">Order a delivery</a>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Amazing food and service!"</p>
            <p className="name">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p>"Best Mediterranean in Chicago."</p>
            <p className="name">- Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p>"Will definitely come back!"</p>
            <p className="name">- Alex Johnson</p>
          </div>
          <div className="testimonial-card">
            <p>"Authentic and delicious."</p>
            <p className="name">- Emily Davis</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;