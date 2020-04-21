import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
