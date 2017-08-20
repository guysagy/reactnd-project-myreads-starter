import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResults from './SearchResults'

class Search extends Component {

  state = {
    query: '',
    resultsBooks : []
  };

  search(query) {
    this.setState({query:query, resultsBooks:[]}, function() {
      if (query.length !== 0) {
        BooksAPI.search(query, 20).then((resultsBooks) => {
          // Ignore responses out of UI input order:
          if (query === this.state.query) {
            if (Array.isArray(resultsBooks) !== true || resultsBooks.length === 0) {
              resultsBooks =[];
            } else {
              const This = this;
              // Search results books don't necessarily have the shelf property
              // (not all books are on a shelf).
              resultsBooks.forEach(function(book, index, array){
                const bookShelf = This.props.idToShelfMap[book.id];
                book.shelf = (bookShelf === undefined || bookShelf === null) ? "none" : bookShelf;
              });
            }
            this.setState({resultsBooks:resultsBooks});
          }
        }); // End search().then()
      }  // End if.
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

              However, remember that the BooksAPI.search method DOES search by title or author. So,
              don't worry if you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="search" placeholder="Search by title or author" onChange={(event) => this.search(event.target.value)} />
          </div>
        </div>
        <SearchResults resultsBooks={this.state.resultsBooks} onShelfChange={this.props.onShelfChange}/>
      </div>
    )
  }

}

export default Search