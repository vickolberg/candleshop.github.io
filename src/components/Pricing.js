// Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <h2>Pricing</h2>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Basic Plan</h3>
            <p>$39.99 / month</p>
            <ul>
              <li>Includes 5GB data</li>
              <li>Unlimited talk & text</li>
              <li>Basic features</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Standard Plan</h3>
            <p>$49.99 / month</p>
            <ul>
              <li>Includes 15GB data</li>
              <li>Unlimited talk & text</li>
              <li>Advanced features</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Premium Plan</h3>
            <p>$69.99 / month</p>
            <ul>
              <li>Unlimited data</li>
              <li>Includes 36GB data</li>
              <li>Unlimited talk & text</li>
              <li>Priority customer support</li>
              <li>Exclusive features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
