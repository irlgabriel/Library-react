import React from "react";

// Importing components
import Book from "./Book"
import BookForm from "./BookForm"

const Library = (props) => {

  return (
    <div className="library">
      <BookForm 
      setBooks={props.setBooks}
      title={props.bookTitle} 
      setTitle={props.setTitle}
      bookAuthor={props.bookAuthor}
      setAuthor={props.setAuthor}
      bookPages={props.bookPages}
      setPages={props.setPages}
      />
      {props.books.map(book => <Book book={book}/>)}
    </div>
  )
}

export default Library;