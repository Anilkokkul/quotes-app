import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    const randomQuote = await axios.get("https://api.quotable.io/random");
    setQuote(randomQuote.data);
  };

  return (
    <div className="App">
      <h1>Quote for the Day</h1>

      <div className="quote">
        {quote.content && <p>"{quote.content}"</p>}
        {quote.author && <h4> - {quote.author}</h4>}
      </div>
      <button className="Authors" onClick={getRandomQuote}>
        Get Random Quote
      </button>
      <Link className="Authors" to={"/authors"}>
        Authors
      </Link>
    </div>
  );
}

export default App;
