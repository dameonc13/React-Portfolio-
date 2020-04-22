import React from "react";
import Home from "./pages/Home";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper>
          <Route path="/React-Portfolio-/" component={Home} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
