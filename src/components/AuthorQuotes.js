import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AuthorQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [authorData, setAuthorData] = useState({});
  const { author } = useParams();
  //   console.log("Author Details", authorData);

  useEffect(() => {
    axios
      .get(
        `https://api.quotable.io/quotes?author=${encodeURIComponent(author)}`
      )
      .then((data) => {
        // console.log(data.data);
        setQuotes(data.data.results);
      })
      .catch((error) => {
        alert("Author not found");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.quotable.io/authors?slug=${author}`)
      .then((data) => {
        // console.log(data.data.results[0]);
        setAuthorData(data.data.results[0]);
      })
      .catch((error) => {
        alert("Author not found");
        console.log(error);
      });
  }, []);

  return (
    <div className="quotesList">
      <div className="Author">
        <h1>{authorData.name}</h1>
        <img src="/unknown.jpg" alt="author" />
        <h4>{authorData.description}</h4>
        <p>{authorData.bio}</p>
      </div>
      {quotes.length > 0 ? (
        <div className="quotes">
          {quotes.map((quote, i) => (
            <blockquote key={i}>
              <q className="">{quote.content}</q>
            </blockquote>
          ))}
        </div>
      ) : (
        <h2>
          No Quotes Found for this Author! Please check the spelling or try a
          different one.
        </h2>
      )}
    </div>
  );
}

export default AuthorQuotes;
