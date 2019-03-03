import React, { Component } from 'react';
import firebase from './firebase.js';
import Question from './Question.js';
import Header from './Header.js';
import Footer from './Footer.js';
/* import Form from './Form.js';
import Submit from './Submit.js'; */




class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Question />
        <Footer />
      </div>
    );
  }
}

export default App;
