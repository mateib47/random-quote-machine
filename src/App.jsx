import React from 'react'
import './app.scss'
import QuoteBox from './components/QuoteBox'
import { useState } from 'react'

const App = () => {
    const randomFromInterval = (a,b) => {
        return Math.floor(Math.random() * (a - b + 1) + a)
    }

    const [newQuote, setNewQuote] = useState(randomFromInterval(0, data.length));
    const data = [{quote: "The hardest battle is against yourself.", author: 'anonymus'}, {quote:"stay hard", author: 'david goggins'}];

   
  return (
    <div className='app'>
        <QuoteBox quote={data[newQuote].quote} author={data[newQuote].author} />
    </div>
  )
}

export default App