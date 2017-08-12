import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class SearchResults extends Component {

  render() {
    return (
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books && this.props.books.map && this.props.books.map((book,index)=>(<Book key={index} bookIndex={index} bookInfo={book}></Book>))}
          </ol>
        </div>
    );
  }

}

export default SearchResults