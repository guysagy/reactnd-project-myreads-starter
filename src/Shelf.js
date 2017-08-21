import React, { Component } from 'react'
import './App.css'
import Book from './Book'

/*
Shelf component.
*/

class Shelf extends Component {

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
              .map((book)=>(<Book key={book.id} bookInfo={book} onShelfChange={this.props.onShelfChange}/>))
            }
          </ul>
        </div>
      </div>
    );
  }

}

export default Shelf