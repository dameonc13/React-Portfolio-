import React from "react";
import Home from "./pages/Home";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route>
          {" "}
          exact path={["/react-portfolio", "/"]} <Home />{" "}
        </Route>
      </div>
    </Router>
  );
}

export default App;
