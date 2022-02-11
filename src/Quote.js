import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Quote() {
    return (
        <div className="d-flex justify-content-center container flex-column">
            <div className="wrapper card" id="quote-box">
                <div className="card-body">
                    <h5 className="card-title">Your quote</h5>
                    <p id="text" className="card-text">Text</p>
                    <p id="author" className="card-text">Author</p>
                    <a href="card-link" className="card-link" id="tweet-quote">Share</a>
                    <FontAwesomeIcon icon="fas fa-twitter" />                     {/*fix*/}
                    <button className="btn btn-primary card-link float-left">New quote</button>
                </div>

            </div>
        </div>
    );
}
