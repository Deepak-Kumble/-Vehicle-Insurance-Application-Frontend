import { Button } from "@mantine/core";
import { NavBar } from "../components/NavBar";
import { FooterLinks } from "../components/FooterLinks";
export default function Page() {
  return (
    <>
      <NavBar />
      <header>
        <div class="bg-image"></div>
        <div class="header-content">
          <h1>Get an Instant Quote for Your Vehicle Insurance</h1>
          <p>
            <b>
              Choose the best insurance policy for your vehicle. We offer fast and easy quotes, competitive
              pricing, and flexible coverage options.
            </b>
          </p>
          <a href="quote.html">
            <button class="quote-button">Get your quote now</button>
          </a>
        </div>
      </header>

      <div class="account-page">
        <div class="container">
          <div class="row">
            <div class="col-2">
              <div class="form-container">
                <div class="form-btn">
                  <span onclick="login()">Login</span>
                  <span onclick="register()">Register</span>
                  <hr id="Indicator" />
                </div>

                <form
                  id="RegForm"
                  onsubmit="return validateregister()"
                  action="/register"
                  method="POST"
                  th:object="${registerRequest}">
                  <input type="text" id="uname1" name="login" placeholder="Username" />
                  <input type="email" id="email1" name="email" placeholder="Email" />
                  <input type="password" id="pass1" name="password" placeholder="Password" />
                  <button type="submit" class="quote-button">
                    Register
                  </button>
                </form>
                <form
                  id="LoginForm"
                  onsubmit="return validatelogin()"
                  action="/login"
                  method="POST"
                  th:object="${loginRequest}">
                  <input type="text" id="uname" name="login" placeholder="Username" />
                  <input type="password" id="pass" name="password" placeholder="Password" />
                  <button type="submit" class="quote-button">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterLinks />
    </>
  );
}
