import React from 'react';
import { Quote } from '../src/Quote';
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }

    }
  return (
    <div className="QuoteApp">
      <header className="QuoteApp-header text-center">
          <h1>Quote App</h1>
      </header>
      <Quote />
    </div>
  );
}


const NEW = 'NEW';
let quoteList = ['believe in yourself', 'stay hard']

const newQuote = (quote) => {
    return {
        type: NEW,
        quote: quote
    }
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case NEW:
            let rand = Math.random(getRandomInt(quoteList.length))
            return quoteList[rand]
        default:
            return state;
    }
};

let getRandomInt = (max) => {
    let min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default App;
