import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <nav>
        <a href="index.html" className="logo">
          <img src="images/logo1.png" alt="Auto Armor Logo" />
          AUTO ARMOR
        </a>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="quote.html">Get Quote</a>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li>
            <a href="account.html">Account</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className="bg-image"></div>
        <div className="header-content">
          <h1>Get an Instant Quote for Your Vehicle Insurance</h1>
          <p>
            <b>
              Choose the best insurance policy for your vehicle. We offer fast and easy quotes, competitive pricing, and flexible coverage options.
            </b>
          </p>
        </div>
      </header>
      <div className="container">
        <h2>List of Policies</h2>
        <br />
        <div className="policy-box">
          <h2>POLICY A</h2>
          <br />
          <p>
            Our Policy A is a great choice for those who are looking for basic coverage at an affordable price. This policy offers the following:
          </p>
          <ul>
            <li>Liability coverage for bodily injury and property damage</li>
            <li>Collision coverage for damages to your own vehicle</li>
            <li>Comprehensive coverage for non-collision damages like theft or natural disasters</li>
            <br />
          </ul>
          <p>
            In addition, you can choose to add on additional coverage options for an extra cost, such as:
          </p>
          <ul>
            <li>Roadside assistance</li>
            <li>Rental car reimbursement</li>
            <li>Increased liability limits</li>
          </ul>
          <br />
          <p>
            <b>
              <u>Generated quote amount:</u>{' '}
            </b>
          </p>
          <div id="quote"></div>
          <a href="quote5.html">
            <button className="quote-button">Buy Now</button>
          </a>
        </div>
        <div className="policy-box">
          <h2>POLICY B</h2>
          <br />
          <p>
            Our Policy B includes more coverage and add-ons compared to Policy A, making it a great choice for those who want extra protection for their vehicle. This policy offers everything that Policy A offers, plus:
          </p>
          <ul>
            <li>Uninsured/underinsured motorist coverage</li>
            <li>Medical payments coverage</li>
            <li>Pet injury coverage</li>
          </ul>
          <br />
          <p>You can also choose to add on any of the following coverage options for an extra cost:</p>
          <ul>
            <li>Accident forgiveness</li>
            <li>Glass coverage</li>
            <li>Custom parts and equipment coverage</li>
          </ul>
          <br />
          <p>
            <b>
              <u>Generated quote amount:</u>{' '}
              <span id="total-quote-b"></span>
            </b>
          </p>
          
      <div id="quote"></div>
      <a href="quote5.html">
        <button className="quote-button">Buy Now</button>
      </a>
    </div>
    <div className="policy-box">
      <h2>POLICY B</h2>
      <br />
      <p>
        Our Policy B includes more coverage and add-ons compared to Policy A, making it a great choice for those who want extra protection for their vehicle. This policy offers everything that Policy A offers, plus:
      </p>
      <ul>
        <li>Uninsured/underinsured motorist coverage</li>
        <li>Medical payments coverage</li>
        <li>Pet injury coverage</li>
      </ul>
      <br />
      <p>You can also choose to add on any of the following coverage options for an extra cost:</p>
      <ul>
        <li>Accident forgiveness</li>
        <li>Glass coverage</li>
        <li>Custom parts and equipment coverage</li>
      </ul>
      <br />
      <p>
        <b>
          <u>Generated quote amount:</u>{' '}
          <span id="total-quote-b"></span>
        </b>
      </p>
      <div id="quote-b"></div>
      <a href="quote5.html">
        <button className="quote-button">Buy Now</button>
      </a>
    </div>
  </div>
  </div>
  );
}

export default App;