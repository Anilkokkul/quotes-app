import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetQuotesByAuthor from "./components/GetQuotesByAuthor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/authors" element={<GetQuotesByAuthor />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
