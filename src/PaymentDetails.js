import React, { useState } from 'react';
import './style.css';

function PaymentForm() {
  const [paymentOption, setPaymentOption] = useState('');

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div>
      <nav>
        <a href="index.html" className="logo">
          <img src="images/logo1.png" alt="logo" />
          AUTO ARMOR
        </a>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="quote.html">Get Quote</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="account.html">Account</a></li>
        </ul>
      </nav>
      <header>
        <div className="bg-image"></div>
        <div className="header-content">
          <h1>Get an Instant Quote for Your Vehicle Insurance</h1>
          <p>
            <b>
              Choose the best insurance policy for your vehicle. We offer fast and easy quotes, competitive pricing, and
              flexible coverage options.
            </b>
          </p>
        </div>
      </header>
      <div className="container">
        <h2 className="form-heading">Payment</h2>
        <form id="payment-form" className="form" method="post" action="/payment">
          <div className="form-group">
            <label htmlFor="payment-option">Payment Option</label>
            <select id="payment-option" name="payoption" className="form-control" onChange={handlePaymentOptionChange}>
              <option value="">Select Payment Option</option>
              <option value="card">Debit/Credit Card</option>
              <option value="upi">UPI</option>
              <option value="netbanking">Net Banking</option>
            </select>
          </div>
          <div id="card-details" className={paymentOption === 'card' ? '' : 'hidden'}>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" name="cardno" className="form-control" placeholder="Enter Card Number" />
            <label htmlFor="cvv">CVV</label>
            <input type="password" id="cvv" name="cvv" className="form-control" placeholder="Enter CVV" />
          </div>
          <div id="upi-details" className={paymentOption === 'upi' ? '' : 'hidden'}>
            <label htmlFor="upi-id">UPI ID</label>
            <input type="text" id="upi-id" name="upi" className="form-control" placeholder="Enter UPI ID" />
          </div>
          <div>
className={paymentOption === 'netbanking' ? '' : 'hidden'}
<label htmlFor="bank-name">Select Bank</label>
<select id="bank-name" name="bank" className="form-control">
<option value="">Select Bank</option>
<option value="sbi">State Bank of India</option>
<option value="hdfc">HDFC Bank</option>
<option value="icici">ICICI Bank</option>
<option value="axis">Axis Bank</option>
<option value="kotak">Kotak Mahindra Bank</option>
</select>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
);
}

export default PaymentForm;