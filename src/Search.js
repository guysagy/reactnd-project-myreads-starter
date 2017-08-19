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

  search = (query) => {

    if (typeof query !== "string" || query.length === 0) {
      this.setState({query: "", resultsBooks: []});
    } else {

      BooksAPI.search(query, 20).then((resultsBooks) => {
        if (Array.isArray(resultsBooks) !== true || resultsBooks.length === 0) {
          resultsBooks =[];
        } else {
          for (let i = 0 ; i < resultsBooks.length ; ++i) {
            const bookId = resultsBooks[i]['id']
            const bookShelf = this.props.idToShelfMap[bookId];
            resultsBooks[i].shelf = (bookShelf === undefined || bookShelf === null) ? "none" : bookShelf;
          }
        }
        // Note: ideally, the server response would include the query string.
        // In asynchronous programmng, the context (here: the query string) needs to be sent
        // to the server, and the server should reflect it back. Currently, it does not.
        // TODO: For some reason, without the following line,  UI does not always get updated with latest search results.
        // Needs to be checked why.
        this.setState({query: query, resultsBooks:[]});
        this.setState({query: query, resultsBooks:resultsBooks});
      });
    }

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
            <input type="search" placeholder="Search by title or author" onKeyUp={(event) => this.search(event.target.value)} />
          </div>
        </div>
        <SearchResults resultsBooks={this.state.resultsBooks} onShelfChange={this.props.onShelfChange}/>
      </div>
    )
  }

}

export default Search