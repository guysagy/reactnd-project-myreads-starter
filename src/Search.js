import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResults from './SearchResults'

class Search extends Component {

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
        <SearchResults books={this.state.books} />
      </div>
    )
  }
}

export default Search