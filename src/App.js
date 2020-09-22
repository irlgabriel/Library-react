import React, { useState } from 'react';
import './App.css';

// Importing components
import Header from "./components/Header"
import Library from "./components/Library"
import Footer from "./components/Footer"

function App() {
  const [books,setBooks] = useState([]);
  const [bookTitle, setTitle] = useState("");
  const [bookAuthor, setAuthor] = useState("");
  const [bookPages, setPages] = useState("");
  return (
    <div className="App">
      <Header />
      <Library
      books={books} 
      setBooks={setBooks}
      bookTitle={bookTitle} 
      setTitle={setTitle}
      bookAuthor={bookAuthor}
      setAuthor={setAuthor}
      bookPages={bookPages}
      setPages={setPages}     
      />
      <Footer />
    </div>
  );
}

export default App;
