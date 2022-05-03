import React from 'react'

const QuoteBox = ({quote, author}) => {
  return (
    <div id="quote-box" className='quoteBox'>
        <div className='textBox'>
            <h1 it="text">{quote}</h1>
            <h2 id='author'></h2>
        </div>
        <div className='left'>
            <a id="tweet-quote" href=""></a>
        </div>
        <div className='right'>
            <button>New Quote</button>
        </div>

    </div>
  )
}

export default QuoteBox