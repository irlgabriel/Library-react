import React from "react";

// Importing components
import Book from "./Book"

class Library extends React.Component {
  render() {
    return (
      <div className="library">
        {this.books.map(book => <Book />)}
      </div>
    )
  }
}

export default Library;