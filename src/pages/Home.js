import React, { Component } from "react";
import Header from "../components/Header";
import About from "../components/About";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default Home;
