import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

/*
Book component - for book data display.
*/

class Book extends Component {

  state = {
    bookInfo : {}
  };

  constructor(props) {
    super(props);
    this.onChangeBookShelf = this.onChangeBookShelf.bind(this);
  }

  onChangeBookShelf(event) {
    event.preventDefault();
    const targetShelf = event.target.value;
    BooksAPI.update(this.state.bookInfo, targetShelf).then((bookInfo)=>{
      // TODO: implement error case handling. I assume here success ....
      const updateBookInfo = this.state.bookInfo;
      updateBookInfo.shelf = targetShelf;
      this.setState({bookInfo:updateBookInfo});
      this.props.onShelfChange(updateBookInfo);
    });
  }

  componentWillMount() {
    this.setState({bookInfo:this.props.bookInfo});
  }

  renderAuthors(author, index) {
    return (
      <div key={index}>{author}</div>
    );
  }

  renderBook(book) {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + ( book && book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "" ) + ')'}}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={this.onChangeBookShelf}>
                <option value="moveTo" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
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