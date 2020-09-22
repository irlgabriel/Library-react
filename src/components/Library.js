import React from "react";

// Importing components
import Book from "./Book"

const Library = (props) => {

  return (
    <div className="library">
      {props.books.map(book =>
      <Book 
      bookRead={props.bookRead}
      setRead={props.setRead}
      setBooks={props.setBooks} 
      book={book}
      books={props.books}

      />
      )}
    </div>
  )
}

export default Library;