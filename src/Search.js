import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchResults from './SearchResults'

/*
Search page component.
Search component is composed of:
** Input element - for search term.
** SearchResults component - for search results display.
*/

class Search extends Component {

  state = {
    query: '',
    resultsBooks : []
  };

  submit(query) {
    this.setState({query}, function() {
      if (this.state.query.length === 0) {
        this.setState({resultsBooks:[]});
      } else {
        BooksAPI.search(this.state.query, 20)
                .then((resultsBooks) => {
                  // Ignore responses out of UI input order:
                  if (query === this.state.query) {
                    if (Array.isArray(resultsBooks) !== true || resultsBooks.length === 0) {
                      resultsBooks =[];
                    } else {
                      const This = this;
                      // Search results books don't necessarily have the shelf property
                      // (not all books are on a shelf).
                      resultsBooks.forEach(function(book, index, array){
                        const bookShelf = This.props.mapBookIdToShelf[book.id];
                        book.shelf = (typeof bookShelf === "string") ? bookShelf : "none" ;
                      });
                    }
                    this.setState({resultsBooks});
                  }
                }) // end then()
                .catch(function(error) {
                  console.log(error);
                });
      }  // end else leg.
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
            <input autoFocus type="search" placeholder="Search by title or author" 
              value={this.state.query}
              onChange={(event) => this.submit(event.target.value)} />
          </div>
        </div>
        <SearchResults resultsBooks={this.state.resultsBooks} onShelfChange={this.props.onShelfChange}/>
      </div>
    )
  }

}

export default Search