import React from "react";
import "./app.scss";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import {data,colors} from './data'

const App = () => {

  const shuffle = (arr) => {
    let i = arr.length,
      j = 0,
      temp;
    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const [newQuote, setNewQuote] = useState(0);
  const [color, setColor] = useState(0);
  const [colorArr, setColorArr] = useState(
    shuffle([...Array(colors.length).keys()])
  );
  const [quoteArr, setQuoteArr] = useState(
    shuffle([...Array(data.length).keys()])
  );

  const generateNew = () => {
    if (color >= colors.length - 1) {
      setColor(0);
      setColorArr(shuffle([...Array(colors.length).keys()]));
    } else {
      let newCol = color + 1;
      setColor(newCol);
    }

    if (newQuote >= data.length - 1) {
      setNewQuote(0);
      setQuoteArr(shuffle([...Array(data.length).keys()]));
    } else {
      let newQuot = newQuote + 1;
      setNewQuote(newQuot);
    }
  };

  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <QuoteBox
          quote={data[quoteArr[newQuote]].quote}
          author={data[quoteArr[newQuote]].author}
          color={colors[colorArr[color]]}
          setNewQuote={generateNew}
        />
      </div>
    </div>
  );
};

export default App;
