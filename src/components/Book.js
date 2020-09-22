import React from "react";

const Book = (props) => {
  function toggleReadStatus() {
    props.setRead(!props.readBook)
  }
  function deleteHandler() {
    props.setBooks(props.books.filter(el => el.id !== props.book.id))
  }
  return (
    <div onClick={toggleReadStatus} className="book">
      <h3 className="book-title">{props.book.title}</h3>
      <h5 className="book-author">{props.book.author}</h5>
      <div onClick={deleteHandler} className="fas fa-trash"></div>
      <p className="book-footer">{props.book.pages}</p>
    </div>
  )
}

export default Book;