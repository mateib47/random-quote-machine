import React from 'react';
import { Quote } from '../src/Quote';
import './App.css';

function App() {
  return (
    <div className="QuoteApp">
      <header className="QuoteApp-header text-center">
          <h1>Quote App</h1>
      </header>
      <Quote />
    </div>
  );
}

export default App;
