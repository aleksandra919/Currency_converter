import React, { Component } from 'react';
import './App.css';

class InputPLN extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onInputChange(e.target.value)
    }

    render() {
        const moneyAmount = this.props.moneyAmount;
        return(
            <fieldset>
                <legend>Enter amount in PLN</legend>
                <input value={moneyAmount}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class CurrencyConverter extends React.Component {
    render() {
        const moneyAmount = this.props.moneyAmount;
        return(
            <div className="collection">
                <p className="collection-item">
                    {this.props.index} : {moneyAmount}
                </p>
            </div>
        );
    }
}

function converToEUR(input) {
    const rounded = Math.round(input * 0.23 * 1000) / 1000;
    return rounded.toString();
}

function converToUSD(input) {
    const rounded = Math.round(input * 0.26 * 1000) / 1000;
    return rounded.toString();
}

function converToGBP(input) {
    const rounded = Math.round(input * 0.2 * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.state = {
            moneyAmount: ''
        }
    }

    handleChangeCurrency(e) {
        this.setState({moneyAmount: e})
    }

    render() {
        const moneyAmount = this.state.moneyAmount;
        const currencyToConvert =
        {
            'EUR': converToEUR(moneyAmount),
            'USD': converToUSD(moneyAmount),
            'GBP': converToGBP(moneyAmount),
        }
        return (
            <div>
                <InputPLN
                    moneyAmount = {moneyAmount}
                    onInputChange = {this.handleChangeCurrency} />
                <CurrencyConverter
                    index = 'EUR'
                    moneyAmount = {currencyToConvert['EUR']} />
                <CurrencyConverter
                    index = 'USD'
                    moneyAmount = {currencyToConvert['USD']} />
                <CurrencyConverter
                    index = 'GBP'
                    moneyAmount = {currencyToConvert['GBP']} />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="todo-app container">
                <h3 className="center teal-text darken-2">Convert PLN into USD, EUR & GBP </h3>
                <Calculator />
            </div>

        );
    }
}

export default App;