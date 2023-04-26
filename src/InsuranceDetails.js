import React from 'react';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header />
      <h2 className="form-heading"><u>OTHER DETAILS</u></h2>
      <form method="post" action="/other" id="insurance-form">
      <div class="form-group">
          <label for="renewal_type">Insurance Renewal Type:</label>
          <div class="radio-btns">
            <input type="radio" id="renewal_type1" name="renewal_type" value="Upgrade">
            <label for="renewal_type1">Upgrade</label>
            </input>
            <input type="radio" id="renewal_type2" name="renewal_type" value="Existing">
            <label for="renewal_type2">Existing</label>
            </input>
          </div>
        </div>
        <div class="form-group">
          <label for="cover_type">Insurance Covering Date:</label>
          <input type="date" id="cover_type" name="cover_type" required>
          </input></div>
        <div class="checkbox-container">
        <input type="checkbox" id="terms-conditions" name="terms-conditions" required>
        <label for="terms-conditions">I agree that all the information provided is true to my knowledge. Terms and Conditions apply.</label>
        </input></div>
        <button type="submit" class="quote-button-1" onclick="submitForm3()">Save</button>
        </form>
      
    </div>
  );
}

export default App;