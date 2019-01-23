import React, { Component } from 'react';
import './App.css';

function Header() {
  return( 
      <div class="title">
        <h1>Currency exchange</h1>
        <p>Write the amount of many to see it in other currency</p>
      </div>
  )
}

const currencyIndex = {
  PLN: 'zloty',
  EUR: 'euro',
};

function toEUR(currencyPLN) {
  return currencyPLN * 0.23292
}

function toPLN(currencyEUR) {
  return currencyEUR / 0.23292
}

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onCurrencyChange(e.target.value)
  }

  render() {
    const currency = this.props.currency;
    const index = this.props.index;
    return(
      <fieldset>
        <legend>Enter currency in {currencyIndex[index]}:</legend>
        <input value={currency}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangePLN = this.handleChangePLN.bind(this);
    this.handleChangeEUR = this.handleChangeEUR.bind(this);
    this.state = {currency: '', index: 'PLN'};
  }
  handleChangeEUR(currency) {
    this.setState({index: 'PLN', currency})
  }

  handleChangePLN(currency) {
    this.setState({index: 'EUR', currency})
  }

  render() {
    const index = this.state.index;
    const currency = this.state.currency;
    const currencyValuePLN = index === 'PLN' ? toEUR(currency) : currency;
    const currencyValueEUR = index === 'EUR' ? toPLN(currency) : currency;

    return (
      <div>
        <CurrencyInput
          index="PLN"
          currency={currencyValuePLN}
          onCurrencyChange={this.handleChangePLN} />
        <CurrencyInput
          index="EUR"
          currency={currencyValueEUR}
          onCurrencyChange={this.handleChangeEUR} />
      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <Header />,
      <Calculator />
    );
  }
}

export default App;
