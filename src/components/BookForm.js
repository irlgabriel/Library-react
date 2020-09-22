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
    console.log(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    
    props.setBooks([...props.books, {title: props.bookTitle, author: props.bookAuthor, pages: props.bookPages}])
    
  }
  return (
    <form>
      <h3>Add New Book!</h3>
      <input onChange={inputTitleHandler} name="title" type="text" placeholder="Book title.."></input>
      <input onChange={inputAuthorHandler} name="author" type="text" placeholder="Book author.."></input>
      <input onChange={inputPagesHandler} name="pages" type="text" placeholder="Number of pages.."></input>
      <select onChange={inputReadHandler}>
        <option value="please-select">Did You Read It?</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
      <button onClick={submitHandler} className="add-book" type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;