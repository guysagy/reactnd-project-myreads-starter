import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyReads from './MyReads'
import Search from './Search'

/*
BooksApp component - top level application component.
*/

class BooksApp extends React.Component {

  state = {
    myReadBooks : [],
    shelfs : ["Currently Reading","Want To Read","Read"],
    idToShelfMap : {}  // Book ID to book shelf mapping.
  };

  constructor(props) {
    super(props);
    this.loadShelfsData = this.loadShelfsData.bind(this);
    this.isBookOnMyShelfs = this.isBookOnMyShelfs.bind(this);
    this.addBookToShelfs = this.addBookToShelfs.bind(this);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.onShelfChange = this.onShelfChange.bind(this);
  }

  componentDidMount() {
    this.loadShelfsData();
  }

  loadShelfsData() {
    BooksAPI.getAll().then((myReadBooks) => {
      const idToShelfMap = {};
      myReadBooks.forEach(function(book, index, array){
        idToShelfMap[book.id] = book.shelf;
      });
      this.setState({myReadBooks, idToShelfMap});
    });
  }

  isBookOnMyShelfs(book) {
    return (typeof this.state.idToShelfMap[book.id] === "string" && this.state.idToShelfMap[book.id] !== "none");
  }

  addBookToShelfs = function(book) {

    let idToShelfMap = {};
    for (let key in this.state.idToShelfMap) {
      idToShelfMap[key] = this.state.idToShelfMap[key];
    }
    let myReadBooks = this.state.myReadBooks.slice();

    idToShelfMap[book.id] = book.shelf;
    myReadBooks.push(book);

    this.setState({idToShelfMap:idToShelfMap, myReadBooks:myReadBooks});
  }

  updateBookShelf(book) {

    let idToShelfMap = {};
    for (let key in this.state.idToShelfMap) {
      idToShelfMap[key] = this.state.idToShelfMap[key];
    }
    let myReadBooks = this.state.myReadBooks.slice();

    idToShelfMap[book.id] = book.shelf;
    for (let index = 0 ; index < myReadBooks.length ; ++index) {
      if (myReadBooks[index].id === book.id) {
        myReadBooks[index].shelf = book.shelf;
        break;
      }
    }

    this.setState({idToShelfMap:idToShelfMap, myReadBooks:myReadBooks});
  }

  onShelfChange(book) {
    if (this.isBookOnMyShelfs(book) === true) {
      this.updateBookShelf(book);
    } else {
      this.addBookToShelfs(book);
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MyReads shelfs={this.state.shelfs} myReadBooks={this.state.myReadBooks} onShelfChange={this.onShelfChange}/>
        )}/>
        <Route exact path="/search" render={() => (
          <Search idToShelfMap={this.state.idToShelfMap} onShelfChange={this.onShelfChange} />
        )}/>
      </div>
    );
  }
}

export default BooksApp