import React, { useState } from 'react';
import './App.css';

// Importing components
import Header from "./components/Header"
import Library from "./components/Library"
import Footer from "./components/Footer"
import BookForm from './components/BookForm';

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="App">
      <Header />
      <BookForm
        books={books} 
        setBooks={setBooks}
      />
      <Library
        books={books}
        setBooks={setBooks}
      />
      <Footer />
    </div>
  );
}

export default App;
