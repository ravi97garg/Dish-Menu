import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";

class App extends Component {
  constructor(){
    super();
    console.log("Props",this.props);
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Dishes/>
        <Footer/>
      </div>
    );
  }
}

export default App;
