import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

// Routes to each page
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
