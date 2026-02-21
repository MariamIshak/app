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
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    image: image3,
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {specialsData.map((special) => (
          <div key={special.id} className="card">
            <img src={special.image} alt={special.title} />
            <h3>{special.title}</h3>
            <p className="price">{special.price}</p>
            <p>{special.description}</p>
            <a href="#order">Order a delivery</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;