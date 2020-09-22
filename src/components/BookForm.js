import React from "react";

const BookForm = (props) => {
  const inputTitleHandler = (e) => {
    props.setTitle(e.target.value)
  }
  const inputAuthorHandler = (e) => {
    props.setAuthor(e.target.value)
  }
  const inputPagesHandler = (e) => {
    props.setPages(e.target.value)
  }
  const inputReadHandler = (e) => {
    e.target.value == "false" ? props.setRead(false) : props.setRead(true)
  }
  const submitHandler = (e) => {
    e.preventDefault();

    props.setBooks([
      ...props.books,
      { title: props.bookTitle, 
        author: props.bookAuthor, 
        pages: props.bookPages,
        readStatus: props.bookRead,
        id: Math.random(1000),
      }
    ])
    props.setAuthor("");
    props.setPages("");
    props.setRead("");
    props.setTitle("");

  }
  return (
    <form>
      <h3>Add New Book!</h3>
      <input value={props.bookTitle} onChange={inputTitleHandler} name="title" type="text" placeholder="Book title.."></input>
      <input value={props.bookAuthor} onChange={inputAuthorHandler} name="author" type="text" placeholder="Book author.."></input>
      <input value={props.bookPages} onChange={inputPagesHandler} name="pages" type="text" placeholder="Number of pages.."></input>
      <select value={props.bookRead} onChange={inputReadHandler}>
        <option value="default">Did you read it?</option>
        <option value="true">Read</option>
        <option value="false">Unread</option>
      </select>
      <button onClick={submitHandler} className="add-book" type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;