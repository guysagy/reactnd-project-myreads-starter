import React, { Component } from 'react'
import './App.css'
import Book from './Book'

/*
Shelf component.
*/

class Shelf extends Component {

  constructor(props) {
    super(props);
    this.titleCompare = this.titleCompare.bind(this);
  }

  // Utility function to help sort books on shelf by title.
  // How to sort an array based on a string property - taken from the following stack overflow post :
  // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
  titleCompare(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ul className="books-grid">
            {
              // Filter myReadBooks books to shelfs by shelf name, then map books to Book components:
              this.props.myReadBooks
              .filter((book)=>(book.shelf.toLowerCase()===this.props.name.toLowerCase().replace(/ /g, "")))
              .sort(this.titleCompare)
              .map((book)=>(<Book key={book.id} bookInfo={book} onShelfChange={this.props.onShelfChange}/>))
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default Shelf