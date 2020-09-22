import React from "react";

function Book(props) {

  function toggleReadStatus(e) {
    e.stopPropagation();
    setBooks(books.map(el => {
      if(el.id === props.book.id) {
        return {
        ...props.book, readStatus: (props.book.readStatus == "read" ? "unread" : "read"),
        }
      }
    }))
  }

  function deleteHandler(e) {
    e.stopPropagation()
    setBooks([props.books.filter(el => el.id !== props.book.id)])
  }

  return (
    <div onClick={toggleReadStatus} className={`book${props.book.readStatus == "read" ? " book-read" : ""}`}>
      <h3 className="book-title">{props.book.title}</h3>
      <h5 className="book-author">{props.book.author}</h5>
      <div onClick={deleteHandler} className="fas fa-trash"></div>
      <p className="book-footer">{props.book.pages}</p>
    </div>
  )

}

export default Book;