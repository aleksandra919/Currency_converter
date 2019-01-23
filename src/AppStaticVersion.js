import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div class="appContent">

      <div class="header">
        <h1>Currency exchange</h1>
        <p>Write the amount of many to see it in other currency</p>
      </div>

      <div class="currencyPLN">
        <fieldset>
          <legend>PLN</legend>
          <input type="text" id="myText" value="1"/>
        </fieldset>
      </div>

      <div class="currencyEUR">
        <fieldset>
            <legend>EUR</legend>
            <input type="text" id="myText" value="0,23292"/>
          </fieldset>
      </div>

      <div class="exchangeRate">
        <p>Today exchange rate is: 0,23292</p>
      </div>

    </div>
    );
  }
}

export default App;
