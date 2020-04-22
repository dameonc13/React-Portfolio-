import React, { Component } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
//import App from "../components/images/Images";

class Home extends Component {
  render() {
    return (
      <div>
        <Header /* pics={App} */ />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
