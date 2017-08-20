import React, { Component } from 'react'
import './App.css'
import Book from './Book'

class SearchResults extends Component {

  render() {
    return (
        <div className="search-books-results">
          <ul className="books-grid">
            {this.props.resultsBooks.map((book,index)=>(<Book key={index} bookInfo={book} onShelfChange={this.props.onShelfChange}/>))}
          </ul>
        </div>
    );
  }

}

export default SearchResults