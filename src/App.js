import React, { useState } from 'react';
import './App.css';

// Importing components
import Header from "./components/Header"
import Library from "./components/Library"
import Footer from "./components/Footer"
import BookForm from './components/BookForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }
  render () {
    return (
      <div className="App">
        <Header />
        <BookForm />
        <Library />
        <Footer />
      </div>
    );
  }
}

export default App;
