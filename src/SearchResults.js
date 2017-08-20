import React, { Component } from 'react'
import './App.css'
import Book from './Book'

/*
Search component - for search results display.
*/

class SearchResults extends Component {

  render() {
    return (
        <div className="search-books-results">
          <ul className="books-grid">
            {this.props.resultsBooks.map((book)=>(<Book key={book.id} bookInfo={book} onShelfChange={this.props.onShelfChange}/>))}
          </ul>
        </div>
    );
  }

}

export default SearchResults