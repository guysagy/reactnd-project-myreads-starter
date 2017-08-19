import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


class Book extends Component {

  state = {
    bookInfo : {},
    onShelfChange : null
  };

  constructor(props) {
    super(props);
    this.onChangeBookShelf = this.onChangeBookShelf.bind(this);
  }

  onChangeBookShelf = function(event) {
    event.preventDefault();
    var targetShelf = event.target.value;
    BooksAPI.update(this.state.bookInfo, targetShelf);
    this.state.onShelfChange(this.state.bookInfo, targetShelf);
  }

  componentWillMount() {
    var copy = JSON.parse(JSON.stringify(this.props.bookInfo));
    this.setState({bookInfo:copy, onShelfChange:this.props.onShelfChange});
  }

  renderAuthors(author, index) {
    return (
      <div key={index}>{author}</div>
    );
  }

  renderBook(book) {
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + ( book && book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "" ) + ')'}}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.onChangeBookShelf}>
                <option value="moveTo" disabled>Move to...</option>
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

  render() {
    const { bookInfo } = this.state
    return (
        <div>{this.renderBook(bookInfo)}</div>
    );
  }

}

export default Book