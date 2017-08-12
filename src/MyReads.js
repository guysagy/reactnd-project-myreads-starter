import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class MyReads extends Component {

  renderShelf(shelf,index) {
    return (
      <div className="bookshelf" key={index}>
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book)=>(book.shelf.toLowerCase()==shelf.toLowerCase().replace(/ /g, "")))
              .map((book,index)=>(<Book key={index} bookIndex={index} bookInfo={book}></Book>))}
          </ol>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelfs.map((shelf,index)=>(this.renderShelf(shelf, index)))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }

}

export default MyReads