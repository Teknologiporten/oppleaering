import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NewPage from './NewPage';
import axios from 'axios';




function App() {
  const [knapp, setKnapp] = useState(false)
  const liste = [1,2,3,4,5]
  const [age, setAge] = useState(0)
  const [quotes, setQuotes] = useState([])



  const url = "https://api.whatdoestrumpthink.com/api/v1/quotes"
  const getQuotes = async() => {
    const data = await axios.get(url)
    setQuotes(data.data.messages.personalized)
  }
  useEffect(() => {
    getQuotes();
  },[])
  
  let id = 1;
  return (
    <div className="App">
      <div className="quotesection">
        <header>Donald Trump quotes</header>
        <div className="scrollbox">
          {quotes.map(quote => {return(
            <div key={id++} className="quotebox">{id}: Valdemar {quote}</div>
          )})}
        </div>
      </div>

    </div>
  );
}

export default App;
