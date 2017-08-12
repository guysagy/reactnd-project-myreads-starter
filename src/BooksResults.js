import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksResults extends Component {

  renderAuthors(author, index) {
    return (
      <div key={index}>{author}</div>
    );
  }

  renderBook(book,index) {
    return (
      <li key={index}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'}}></div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
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
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books && this.props.books.map && this.props.books.map((book,index)=>(this.renderBook(book,index)))}
          </ol>
        </div>
    );
  }
}

export default BooksResults