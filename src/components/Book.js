import React from "react";

const Book = (book, books, setBooks) => {

  function toggleReadStatus(e) {
    e.stopPropagation();
    setBooks([books.map(el => {
      if(el.id === book.id) {
        return {
        ...book, readStatus: (book.readStatus == "read" ? "unread" : "read"),
        }
      }
    })])
  }

  function deleteHandler(e) {
    e.stopPropagation()
    setBooks([books.filter(el => el.id !== book.id)])
  }
  return (
    <div onClick={toggleReadStatus} className={`book${book.readStatus == "read" ? " book-read" : ""}`}>
      <h3 className="book-title">{book.title}</h3>
      <h5 className="book-author">{book.author}</h5>
      <div onClick={deleteHandler} className="fas fa-trash"></div>
      <p className="book-footer">{book.pages}</p>
    </div>
  )
}

export default Book;