import React from "react";
import "./app.scss";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import Topbar from "./components/Topbar/Topbar";

const App = () => {
    const colors = ["#BCECE0","#36EEE0", "#F652A0","#4C5270"];
  const data = [
    { quote: "The hardest battle is against yourself.", author: "anonymus" },
    { quote: "stay hard", author: "david goggins" },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
  ];
  const [newQuote, setNewQuote] = useState(0);
  const [color, setColor] = useState(0)

  const generateNew = () => {
    setNewQuote(Math.floor(Math.random() * data.length));
    setColor(Math.floor(Math.random() * data.length));
  };

  return (
    <div className="app">
      <Topbar/>
      <div className="section">
        <QuoteBox
        quote={data[newQuote].quote}
        author={data[newQuote].author}
        color={colors[color]}
        setNewQuote={generateNew}
      />
      </div>
      
    </div>
  );
};

export default App;
