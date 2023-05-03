import { useState } from "react";

function QuoteForm() {
  const [todl, setTodl] = useState("");
  const [drive, setDrive] = useState(0);
  const [traf, setTraf] = useState(0);
  const [claims, setClaims] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    window.location.href="quote3.html";
  }

  return (
    <div>
      <nav>
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
              Choose the best insurance policy for your vehicle. We offer fast
              and easy quotes, competitive pricing, and flexible coverage
              options.
            </b>
          </p>
        </div>
      </header>

      <div className="container-1">
        <h2 className="form-heading">
          <u>DRIVING DETAILS</u>
        </h2>
        <form onSubmit={handleSubmit} id="driving-form">
          <div className="form-group">
            <label htmlFor="todl">Type of Driving License</label>
            <select
              id="todl"
              name="todl"
              value={todl}
              onChange={(event) => setTodl(event.target.value)}
            >
              <option value="" selected disabled>
                Select Type of Driving License
              </option>
              <option value="full">Full</option>
              <option value="provisional">Provisional</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="drive">Driving Experience (years)</label>
            <input
              type="number"
              id="drive"
              name="drive"
              value={drive}
              onChange={(event) => setDrive(event.target.value)}
              min="0"
            />
          </div>
          <div className="form-group">
            <label htmlFor="traf">Number of Traffic Convictions</label>
            <input
              type="number"
              id="traf"
              name="traf"
              value={traf}
              onChange={(event) => setTraf(event.target.value)}
              min="0"
            />
          </div>
          <div className="form-group">
            <label htmlFor="claims">
              Number of Insurance Claims in Past Year
            </label>
            <input
              type="number"
              id="claims"
              name="claims"
              value={claims}
              onChange={(event) => setClaims(event.target.value)}
              min="0"
              />
              </div>
              <div className="form-group">
              <button type="submit" className="btn-primary">
       
              </button>
              </div>
              </form>
              </div>
       
                <footer>
                  <div className="footer-content">
                    <img src="images/logo2.png" alt="Auto Armor logo" />
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
                  </div>
                  <div className="footer-bottom">
                    <p>
                      &copy; 2023 Auto Armor Insurance. All Rights Reserved. Design by
                      <a href="https://www.styleshout.com/">styleshout</a>
                    </p>
                  </div>
                </footer>
              </div>
              );
              }
              
              export default DrivingDetails;
