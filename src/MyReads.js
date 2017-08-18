import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book'

class MyReads extends Component {

  renderShelf(shelf, shelfIndex) {
    return (
      <div className="bookshelf" key={shelfIndex}>
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.myReadBooks.filter((book)=>(book.shelf.toLowerCase()===shelf.toLowerCase().replace(/ /g, ""))).map((book,bookIndex)=>(<Book key={bookIndex} bookInfo={book}></Book>))}
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