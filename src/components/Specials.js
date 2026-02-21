import React from 'react';
import image1 from '../assets/greek-salad.jpg';
import image2 from '../assets/bruchetta.svg';
import image3 from '../assets/lemon-dessert.jpg';

const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: image1,
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: image2,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: image3,
  },
];

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-container">
        <div className="specials-header">
          <h2 className="specials-title">This Week's Specials</h2>
          <button className="specials-button">Online Menu</button>
        </div>
        <div className="specials-cards">
          {specialsData.map((special) => (
            <article key={special.id} className="special-card">
              <img 
                src={special.image} 
                alt={special.title} 
                className="special-card-image"
              />
              <div className="special-card-content">
                <div className="special-card-header">
                  <h3 className="special-card-title">{special.title}</h3>
                  <span className="special-card-price">{special.price}</span>
                </div>
                <p className="special-card-description">{special.description}</p>
                <a href="#order" className="special-card-link">
                  Order a delivery
                  <span className="arrow-icon">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;