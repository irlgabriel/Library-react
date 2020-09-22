import React from "react";

const Book = (props) => {
  function toggleReadStatus() {

  }
  return (
    <div onClick={toggleReadStatus}className="book">
      <h1 className="book-title"></h1>
      <p className="book-author"></p>
      <p className="book-footer"></p>
    </div>
  )
}

export default Book;