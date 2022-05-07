import React from "react";
import "./app.scss";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
  const colors = [
    "#3D3C40",
    "#575659",
    "#A6A6A6",
    "#733321",
    "#445869",
    "#042940",
    "#005C53",
  ];
  const data = [
    {
      quote: "Winners never quit and quitters never win.",
      author: "Vince Lombardi",
    },
    {
      quote:
        "My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new.",
      author: "Richard Brandson",
    },
    {
      quote:
        "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
      author: "Bill Gates",
    },
    {
      quote:
        "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
      author: "Warren Buffett",
    },
    {
      quote:
        "One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.",
      author: "Jeff Bezos",
    },
    {
      quote:
        "Logic will get you from A to B. Imagination will take you everywhere.",
      author: "Albert Einstein",
    },
    {
      quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
      author: "Thomas Edison",
    },
  ];

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
