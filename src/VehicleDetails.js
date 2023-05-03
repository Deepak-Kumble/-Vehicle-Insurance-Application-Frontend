import React, { useState } from "react";
function VehiceForm() {
  return (
    <>
    <div class="container">
        <h2><u>VEHICLE DETAILS</u></h2>
        <form method="post" action="/vehicle" th:object="${vehicleRequest}" id="vehicle-form">

        <div class="form-group">
          <label for="regis">Registration Number</label>
          <input type="text" id="regis" name="regis">
            </input>
          
        </div>
        <div class="form-group">
          <label for="yor">Year of Registration</label>
          <select id="yor" name="yor">
            <option value="" selected disabled>Select Year of Registration</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2012">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
          </select>
        </div>
      
        <div class="form-group">
            <label for="make">Vehicle Maker:</label>
            <select id="make" name="make">
              <option value="" selected disabled>Select Vehicle Maker</option>
                <option value="AC">AC</option>
                <option value="Aixam">Aixam</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="ARO">ARO</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Audi">Audi</option>
                <option value="Austin">Austin</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="Bond">Bond</option>
                <option value="Bristol">Bristol</option>
                <option value="Buick">Buick</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Chrysler">Chrysler</option>
                <option value="Citreon">Citreon</option>
                <option value="Daewoo">Daewoo</option>
                <option value="Daihatsu">Daihatsu</option>
                <option value="Dallas">Dallas</option>
                <option value="Era">Era</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Fiat">Fiat</option>
                <option value="Ford">Ford</option>
                <option value="Holden">Holden</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Isuzu">Isuzu</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jeep">Jeep</option>
                <option value="Khaleej">Khaleej</option>
                <option value="KIA">KIA</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Landrover">Landrover</option>
                <option value="Lexus">Lexus</option>
                <option value="Ligier">Ligier</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Lotus">Lotus</option>
                <option value="Mahindra">Mahindra</option>
                <option value="Marcos">Marcos</option>
                <option value="Maserati">Maserati</option>
                <option value="Maybach">Maybach</option>
                <option value="Mazda">Mazda</option>
                <option value="Mercedez-Benz">Mercedez-Benz</option>
                <option value="Mercury">Mercury</option>
                <option value="MG">MG</option>
                <option value="Microcar">Microcar</option>
                <option value="Mini">Mini</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Morgan">Morgan</option>
                <option value="Nissan">Nissan</option>
                <option value="Oka">Oka</option>
                <option value="Opel">Opel</option>
                <option value="Panther">Panther</option>
                <option value="Perodua">Perodua</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Porsche">Porsche</option>
                <option value="Renault">Renault</option>
                <option value="Reva">Reva</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
                <option value="Rover">Rover</option>
                <option value="Saab">Saab</option>
                <option value="Seat">Seat</option>
                <option value="Skoda">Skoda</option>
                <option value="Smart">Smart</option>
                <option value="Ssangyong">Ssangyong</option>
                <option value="Subaru">Subaru</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Tata">Tata</option>
                <option value="Toyota">Toyota</option>
                <option value="TVR">TVR</option>
                <option value="Vauxhall">Vauxhall</option>
                <option value="Vexel">Vexel</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Volvo">Volvo</option>
            </select>
      <label for="model">Vehicle Model:</label>
            <select id="model" name="model">
              <option value="">Select a Vehicle Model</option>

            </select>
        </div>



        <div class="form-group">
          <label for="fuel">Fuel Type</label>
          <select id="fuel" name="fuel">
            <option value="">Select a Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>

        <div class="form-group">
          <label for="gearbox">Gearbox Type</label>
          <select id="gearbox" name="gearbox">
            <option value="">Select a Gearbox Type</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        </form>
        <button type="submit" class="quote-button-1" onclick="submitForm1()">Save</button>
      </div>
      </>
      );
    }
    

  export default VehicleDetails;



      
     
      
  
