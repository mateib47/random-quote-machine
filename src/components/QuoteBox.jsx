import "./quoteBox.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const QuoteBox = ({ quote, author, setNewQuote, color }) => {
  return (
    <div id="quote-box" className="quoteBox card" style={{backgroundColor: color}}>
      <div className="cardBody">
        <div className="textBox row">
          <h1 id="text" className="cardTitle">{quote}</h1>
          <h2 id="author" className="cardSubtitle">{author}</h2>
        </div>
        <div className="left">
          <a id="tweet-quote" href=""></a>
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
