import React, { useState } from 'react';

function UserForm() {
  const [userRequest, setUserRequest] = useState({firstName: '', lastName: '', dob: '', email: '', num: '', addr: ''  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/user', {
      method: 'POST',
      body: new FormData(event.target)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'quote1.html';
      }
    })
    .catch(error => {

      console.error(error);
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserRequest(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
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
              Choose the best insurance policy for your vehicle. We offer fast
              and easy quotes, competitive pricing, and flexible coverage
              options.
            </b>
          </p>
        </div>
      </header>

      <div className="container">
        <h2>
          <u>USER DETAILS</u>{' '}
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userRequest.firstName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userRequest.lastName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={userRequest.dob}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userRequest.email}
            onChange={handleInputChange}
            required
            />

            <label htmlFor="num">Phone Number:</label>
            <input
            type="tel"
            id="num"
            name="num"
            pattern="[0-9]{10}"
            value={userRequest.num}
            onChange={handleInputChange}
            required
            />

            <label htmlFor="addr">Address:</label>
            <textarea
            id="addr"
            name="addr"
            value={userRequest.addr}
            onChange={handleInputChange}
            required
            />
          <button type="submit">Save</button>
      </form>

</div>
<footer>
    <div className="container">
      <p>
        &copy; 2023 Auto Armor. All Rights Reserved. 
    
      </p>
    </div>
  </footer>
</>
);
}

export default UserDetails;
        
