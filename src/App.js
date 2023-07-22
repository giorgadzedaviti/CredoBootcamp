import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Individuals from "./components/individuals/Individuals";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Individuals />
      <Footer />
    </div>
  );
}

export default App;
