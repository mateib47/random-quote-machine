import "./quoteBox.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteBox = ({ quote, author, setNewQuote, color }) => {
  return (
    <>
      <div
        id="quote-box"
        className="quoteBox"
        style={{ backgroundColor: color }}
      >
        <div className="top">
          <h1 id="text">❝{quote}</h1>
          <h4 id="author">- {author}</h4>
        </div>

        <div className="bottom">
          <div className="left">
            <FontAwesomeIcon icon={faTwitter} />

            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_blank"
            >
              Tweet
            </a>
          </div>
          <div className="right">
            <button
              id="new-quote"
              className="btn primary"
              onClick={() => setNewQuote()}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
      <a href="http://mateibucur.me/" style={{color:"inherit", textDecoration:"none", marginTop:"15px"}}>by matei</a>
    </>
  );
};

export default QuoteBox;
