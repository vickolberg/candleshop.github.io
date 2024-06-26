// Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonial">
          {/* <img src="https://via.placeholder.com/150" alt="Customer" /> */}
          <div className="testimonial-text">
            <p>"Great phone with amazing camera quality and fast performance. Highly recommend!"</p>
            <p><strong>John Doe</strong></p>
          </div>
        </div>
        <div className="testimonial">
          {/* <img src="https://via.placeholder.com/150" alt="Customer" /> */}
          <div className="testimonial-text">
            <p>"Best customer service I've experienced. They helped me set up everything quickly and efficiently."</p>
            <p><strong>Jane Smith</strong></p>
          </div>
        </div>
        <div className="testimonial">
          {/* <img src="https://via.placeholder.com/150" alt="Customer" /> */}
          <div className="testimonial-text">
            <p>"Love the sleek design and ease of use. Definitely worth the price."</p>
            <p><strong>Michael Johnson</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
