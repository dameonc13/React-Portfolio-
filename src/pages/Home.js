import React, { Component } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
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
