
import './App.css';
import { Route, Link } from 'react-router-dom';



function App() {
  <body>
  return (
    <div className="home">
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
          <p><b>Choose the best insurance policy for your vehicle. We offer fast and easy quotes, competitive pricing, and flexible coverage options.</b></p>
          <a href="quote.html"><button className="quote-button">Get your quote now</button></a>
        </div>
      </header>
    
      <main>
        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Fast and Easy Quotes</li>
            <li>Competitive Pricing</li>
            <li>Flexible Coverage Options</li>
            <li>24/7 Customer Support</li>
          </ul>
          <p>Auto Armor is the premier choice for vehicle insurance quotes. Our online platform makes it easy to compare rates from multiple providers and find the best coverage for your needs. We understand that choosing the right insurance can be overwhelming, so we've made it our mission to simplify the process and provide personalized recommendations. Our team of experts is always here to help, whether you have questions about your policy or need assistance filing a claim. With Auto Armor, you can rest easy knowing that your vehicle is protected by top-rated insurers at an affordable price.</p>
        </section>
      
        <section>
          <h2>How It Works?</h2>
          <ol>
            <li>Enter Your Vehicle Information</li>
            <li>Choose Your Coverage Options</li>
            <li>Get Your Quote Instantly</li>
            <li>Buy Your Policy Online</li>
          </ol>
          <p><u>1. Provide Your Information:</u> Begin by filling out the online application form with your personal information and vehicle details. This information will be used to provide an accurate quote.<br />
            <u>2. Receive Your Quote:</u> Once you submit your application, you'll receive a quote based on the information you provided. It will include information on the coverage options available to you.<br />
            <u>3. Compare Your Options:</u> Review the quote and compare the coverage options and cost to find the best policy for your needs.<br />
            <u>4. Purchase Your Policy:</u> Once you've found the right policy, simply purchase it online. You can now start driving with peace of mind knowing you're protected.</p>
        </section>
      </main>
    
      <footer>
        <p>&copy; 2023 Auto Armor. All rights reserved.</p>
      </footer>

    </div>

  );
  </body>
}

export default App;
