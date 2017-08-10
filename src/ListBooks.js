import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import './App.css'


class ListBooks extends Component {
    renderBook(book) {
     // console.log(book);
      const bookImageUri = "http://books.google.com/books/content?id="+book.image;
      console.log(bookImageUri);
      return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + bookImageUri + ')'}}></div>
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
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        );
    }

    render() {
      console.log(this.props);

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.booksData.filter((book)=>(book.readStatus=='Currently Reading')).map((book)=>(this.renderBook(book)))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.booksData.filter((book)=>(book.readStatus=='Want to Read')).map((book)=>(this.renderBook(book)))
                    }
                    </ol>
                  </div>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                      this.props.booksData.filter((book)=>(book.readStatus=='Read')).map((book)=>(this.renderBook(book)))
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks