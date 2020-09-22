import React from "react";

// Importing components
import Book from "./Book"

const Library = ({books, setBooks}) => {
  return (
    <div className="library">

      {books.map(book =>
      <Book 
      book={book}
      setBooks={setBooks} 
      books={books}
      />
      )}
    </div>
  )
}

export default Library;