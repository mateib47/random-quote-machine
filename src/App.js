import React from 'react';
import { Quote } from '../src/Quote';
import './App.css';

function App() {
  return (
    <div className="QuoteApp">
      <header className="QuoteApp-header">
          <Quote />
      </header>
    </div>
  );
}

export default App;
