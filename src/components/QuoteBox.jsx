import "./quoteBox.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const QuoteBox = ({ quote, author, setNewQuote, color }) => {
  return (
    <div id="quote-box" className="quoteBox" style={{backgroundColor: color}}>
      <div className="">
        <div className="">
          <h1 id="text" className="">{quote}</h1>
          <h2 id="author" className="">- {author}</h2>
        </div>
        <div className="left">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">Tweet</a>
        </div>
        <div className="right">
          <button className="btn primary" onClick={() => setNewQuote()}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
