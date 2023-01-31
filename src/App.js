import React from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt3,
} from "./Containers";
import { Brand, Cta, Navbar, Article } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
