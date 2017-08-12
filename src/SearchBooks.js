import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import BooksResults from './BooksResults'
import './App.css'


class SearchBooks extends Component {

  state = {
    books : [],
    query: ''
  };

  search = (query) => {
    // this.setState({query: query})
    BooksAPI.search(query, 20).then((books) => {
      this.setState({books:books, query: query});
    });

  }

  /*
  renderAuthors(author, index) {
    return (
      <div key={index}>{author}</div>
    );
  }

  renderBook(book,index) {
   // console.log(book);
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
  */

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.search(event.target.value)} />
          </div>
        </div>
        <BooksResults books={this.state.books} />
        {/*
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books && this.state.books.map && books.map((book,index)=>(this.renderBook(book,index)))}
          </ol>
        </div>
        */}
      </div>
    )
  }
}

export default SearchBooks