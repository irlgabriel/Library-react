import React from "react";

class BookForm extends React.Component {
  submitHandler(e) {
    e.preventDefault();
    const form = e.target.parentElement;
    setBooks([
      ...books,
      { title: form.title.value, 
        author: form.author.value, 
        pages: form.pages.value,
        readStatus: form.readStatus.value,
        id: Math.random(1000),
      }
    ])
    form.title.value = "";
    form.author.value = "";
    form.pages.value = "";
    form.readStatus.value = "read";
  }
  render() {
    return (
      <form>
        <h3>Add New Book!</h3>
        <input name="title" type="text" placeholder="Book title.."></input>
        <input name="author" type="text" placeholder="Book author.."></input>
        <input name="pages" type="text" placeholder="Number of pages.."></input>
        <select name="readStatus">
          <option value="read">Read</option>
          <option value="unread">Unread</option>
        </select>
        <button onClick={submitHandler} className="add-book" type="submit">Add Book</button>
      </form>
    )
  }
}

export default BookForm;