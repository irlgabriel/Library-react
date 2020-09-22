import React, { useState } from 'react';
import './App.css';

// Importing components
import Header from "./components/Header"
import Library from "./components/Library"
import Footer from "./components/Footer"
import BookForm from './components/BookForm';

function App() {
  const [books,setBooks] = useState([]);
  const [bookTitle, setTitle] = useState("");
  const [bookAuthor, setAuthor] = useState("");
  const [bookPages, setPages] = useState("");
  const [bookRead, setRead] = useState("true");
  return (
    <div className="App">
      <Header />
      <BookForm
        books={books} 
        setBooks={setBooks}
        bookTitle={bookTitle} 
        setTitle={setTitle}
        bookAuthor={bookAuthor}
        setAuthor={setAuthor}
        bookPages={bookPages}
        setPages={setPages}
        bookRead={bookRead}
        setRead={setRead} 
      />
      <Library
        setBooks={setBooks}
        books={books}
        bookRead={bookRead}
        setRead={setRead}
      />
      <Footer />
    </div>
  );
}

export default App;
