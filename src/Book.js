import React, { Component } from 'react'
import './App.css'


class Book extends Component {

  renderAuthors(author, index) {
    return (
      <div key={index}>{author}</div>
    );
  }

  onChangeBookShelf = function() {

  }

  renderBook(book) {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + ( book && book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "" ) + ')'}}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.onChangeBookShelf}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.map((author,index)=>(this.renderAuthors(author,index)))}</div>
        </div>
      </li>
    );
  }

  render() {
    return (
        <div>{this.renderBook(this.props.bookInfo)}</div>
    );
  }

}

export default Book